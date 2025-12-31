import os
from langchain_community.document_loaders import PyMuPDFLoader, TextLoader, CSVLoader, Docx2txtLoader

def load_documents(path):

    documents = []

    for file in os.listdir(path):
        full_path = os.path.join(path, file)

        if file.endswith(".pdf"):
            documents.extend(PyMuPDFLoader(full_path).load())
        elif file.endswith(".txt"):
            documents.extend(TextLoader(full_path).load())
        elif file.endswith(".csv"):
            documents.extend(CSVLoader(full_path).load())
        elif file.endswith(".docx"):
            documents.extend(Docx2txtLoader(full_path).load())

    return documents
