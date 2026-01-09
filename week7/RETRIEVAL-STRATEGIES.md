## Day 2 — Advanced Retrieval & Context Engineering

This document describes the retrieval and context engineering strategies implemented in Day 2 to improve retrieval accuracy, reduce hallucination, and provide fully traceable context.

## 1. Objective

The goal of Day 2 is to build an advanced retriever that supports:
Hybrid retrieval (semantic + keyword)

Metadata filtering

Keyword fallback

Reranking

Deduplication

Fully traceable context


## 2. Hybrid Retrieval Strategy

A hybrid retrieval approach is implemented by combining:

Dense retrieval using embeddings + FAISS

Sparse retrieval using BM25 keyword 


## 3. Dense Indexing (Semantic Search)

Uses the Hugging Face sentence-transformer model:
sentence-transformers/all-MiniLM-L6-v2.

## 4. Sparse Indexing (Keyword Search)

BM25 (rank_bm25) is used for keyword-based retrieval.

## 5. Keyword Fallback Mechanism

Then BM25 results are used as a fallback.


## 6. Deduplication
To avoid repeated or overlapping context.

## 7. Reranking Strategy 

Uses a cross-encoder to score (query, chunk) pairs for relevance and sorts results by score and removes duplicates.
Applies MMR to balance relevance and diversity.
