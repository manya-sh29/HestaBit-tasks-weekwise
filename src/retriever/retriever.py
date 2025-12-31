from langchain_community.vectorstores import FAISS
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.document_loaders import PyMuPDFLoader
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOCS_FOLDER = os.path.join(BASE_DIR, "data/raw")
VECTORSTORE_PATH = os.path.join(BASE_DIR, "vectorstore")
os.makedirs(VECTORSTORE_PATH, exist_ok=True)

embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")

def get_vectorstore():
    all_docs = []

    for filename in os.listdir(DOCS_FOLDER):
        if filename.endswith(".pdf"):
            pdf_path = os.path.join(DOCS_FOLDER, filename)
            loader = PyMuPDFLoader(pdf_path)
            docs = loader.load()
            all_docs.extend(docs)

    vectorstore = FAISS.from_documents(all_docs, embedding=embeddings)
    vectorstore.save_local(VECTORSTORE_PATH)

    return vectorstore
