import pickle,io
import faiss
import numpy as np
import evaluation
from generator.llm_client import LocalLLMClient 
from retriever.ask_retrieval import AskRetrievalEngine
from pipelines.sql_pipeline import sql_qa_pipeline
from src.retriever.image_search import search_by_image, search_images
from src.evaluation.rag_eval import evaluate


from fastapi import FastAPI, HTTPException, UploadFile, File
from PIL import Image
from sentence_transformers import SentenceTransformer

llm = LocalLLMClient()

app = FastAPI()

index = faiss.read_index('src/vectorstore/index.faiss')
embeddings = np.array(
    [index.reconstruct(i) for i in range(index.ntotal)]
)

with open('src/vectorstore/metadata.pkl', 'rb') as file:
    documents = pickle.load(file)

ask_engine = AskRetrievalEngine(
    documents= documents,
    embeddings= embeddings,
    embedder= SentenceTransformer("all-MiniLM-L6-v2"),
)

@app.post("/ask")
def ask_question(question: str):
    if not question:
        raise HTTPException(status_code=400, detail="Question cannot be empty.")

    result = ask_engine.ask(
        question=question,
        top_k=5
    )

    answer = result["answer"]
    context = result["context"]
    evaluation = evaluate(answer, context)

    return {
        "answer": answer,
        "hallucination": evaluation["hallucinated"],
        "confidence": evaluation["confidence"],
        "faithfulness": evaluation["faithfulness"]
    }


from src.pipelines.context_builder import build_context

@app.post("/ask-image")
async def ask_image(
    file: UploadFile = File(...),
    question: str = "Explain the image"
):
    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="File must be an image")

    image_bytes = await file.read()
    image = Image.open(io.BytesIO(image_bytes)).convert("RGB")

    temp_path = "temp_query_image.jpg"
    image.save(temp_path)

    image_results = search_by_image(temp_path, top_k=5)

    documents = []
    for r in image_results:
        documents.append({
            "text": f"Caption: {r.get('caption', '')}\nOCR: {r.get('ocr_text', '')}",
            "source": r.get("image_path"),
            "type": "image"
        })

    image_context, sources = build_context(documents)

    prompt = f"""
    You are a helpful AI assistant that answers questions based ONLY on the provided image context.

    IMAGE CONTEXT:
    {image_context}

    USER QUESTION:
    {question}

    INSTRUCTIONS:
    - Use only the image context (captions and OCR).
    - If the answer is not present in the context, say: "The image does not contain enough information."
    - Be clear and concise.
    - Do not hallucinate or assume missing details.

    ANSWER:
    """

    answer= llm.generate(
        prompt
    )
    print(answer)
    evaluation = evaluate(answer, image_context)
    
    return {
        "answer": answer,
        "hallucination": evaluation["hallucinated"],
        "confidence": evaluation["confidence"],
        "faithfulness": evaluation["faithfulness"]
    }


@app.post("/ask-sql")
def ask_sql(question: str):
    if not question:
        raise HTTPException(status_code=400, detail="Question cannot be empty.")

    result = sql_qa_pipeline(
        user_query=question,
        db_path="data/mydb.db"
    )
    return {
        "answer": result
    }



