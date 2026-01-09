from sentence_transformers import SentenceTransformer

model = SentenceTransformer("all-MiniLM-L6-v2")

def generate_embeddings(chunks):
    
    texts = [chunk.page_content for chunk in chunks]
    metadatas = [chunk.metadata for chunk in chunks]
    
    for meta, text in zip(metadatas, texts):
        meta["text"] = text

    embeddings = model.encode(texts, show_progress_bar=True)

    return embeddings, metadatas
