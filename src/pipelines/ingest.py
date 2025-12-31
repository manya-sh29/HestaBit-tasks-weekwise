import logging
import os
from src.utils.loader import load_documents
from src.utils.chunker import chunk_documents
from src.embeddings.embedder import generate_embeddings
from src.vectorstore.store import store_vectors

CLEANED_DATA_PATH = "src/data/cleaned"
os.makedirs(CLEANED_DATA_PATH, exist_ok=True)

logging.basicConfig(
    filename="src/logs/ingest.log",
    filemode="a",  
    format="%(asctime)s - %(levelname)s - %(message)s",
    level=logging.INFO
)

def run_ingestion():
    logging.info("Starting ingestion pipeline...")

    documents = load_documents("src/data/raw")
    logging.info(f"Loaded {len(documents)} documents.")

    for i, doc in enumerate(documents, 1):
        with open(os.path.join(CLEANED_DATA_PATH, f"cleaned_doc_{i}.txt"), "w", encoding="utf-8") as f:
            f.write(doc.page_content)

    chunks = chunk_documents(documents)
    logging.info(f"Created {len(chunks)} chunks.")

    embeddings, metadatas = generate_embeddings(chunks)
    logging.info("Generated embeddings for all chunks.")

    store_vectors(embeddings, metadatas)
    logging.info("Stored vectors and metadata in FAISS.")

    print(f"Ingestion completed: {len(chunks)} chunks stored.")
    logging.info("Ingestion pipeline completed successfully.")

if __name__ == "__main__":
    run_ingestion()
