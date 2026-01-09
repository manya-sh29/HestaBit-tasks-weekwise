from langchain_text_splitters import RecursiveCharacterTextSplitter
from src.utils.cleaner import clean_text

def chunk_documents(documents):
    for doc in documents:
        doc.page_content = clean_text(doc.page_content)

    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=800,
        chunk_overlap=150
    )

    chunks = text_splitter.split_documents(documents)
    return chunks
