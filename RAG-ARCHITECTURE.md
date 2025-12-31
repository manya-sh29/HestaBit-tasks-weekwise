# RAG Architecture Overview

## What is RAG?
Retrieval-Augmented Generation (RAG) is an AI framework that combines document retrieval with text generation to produce accurate and up-to-date responses. Unlike traditional language models, it fetches relevant information from external sources before generating an answer.
RAG (Retrieval-Augmented Generation) is a hybrid model that combines:

1. **Retrieval**: Fetching relevant information from a vector database.
2. **Generation**: Using a language model (LLM) to generate answers based on the retrieved context.

## Components of RAG

### 1. Document Ingestion
- Load and preprocess documents from `data/raw/`.
- Split into chunks and clean the text in `data/cleaned/`.

### 2. Embeddings
- Convert chunks into vector embeddings in `data/embeddings/`.

### 3. Vector Store
- Store embeddings in FAISS index in `vectorstore/faiss_index/`.

### 4. Retriever & Query Engine
- Retrieve relevant chunks and generate answers with LLM.

#FlowChart 
```text

Load Documents
     |
     v
Divide Documents into Chunks
     |
     v
Generate Embeddings for Each Chunk
     |
     v
Store Embeddings in Vectorstore/FAISS
     |
     v
Data Ready for Retrieval
```


## RAG Workflow

```text
User Query
     |
     v
  Retriever
     |
     v
Vector Store (FAISS)
     |
     v
    LLM
     |
     v
Generated Response
     ^
     |
 Embeddings <- Document Chunks
```

**User Query**: The input question or prompt from the user.

**Retriever**: Searches the vector store to find the most relevant document chunks for the query.

**Vector Store (FAISS)**: Stores embeddings of all document chunks, enabling fast similarity search.

**LLM (Language Model)**: Generates the answer using both the retrieved document chunks and its pre-trained knowledge.

**Generated Response**: The final output returned to the user.

**Embeddings** <- Document Chunks: Shows that the LLM relies on embeddings created from document chunks for retrieval and context.
