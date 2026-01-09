# Day 3 — Multimodal RAG System

## Overview
Implemented image ingestion, captioning, CLIP embeddings, and semantic search for the Multimodal RAG pipeline.

---

## 1. image_ingest.py
Reads images, performs OCR, generates captions using BLIP, and computes image + text embeddings.  
Executed to process all images and produce OCR text, captions, and embeddings.
- Extracted OCR from each image using pytesseract.
- Generated captions with BLIP.
- Concatenated OCR + caption and computed CLIP text embeddings; computed CLIP   image embeddings.
- Saved per-image metadata (OCR, caption, embeddings) for retrieval.

![alt text](<Screenshot from 2026-01-08 12-43-23.png>)
---


##  2. clip_embedder.py
Contains the CLIPEmbedder class for generating image and text embeddings.  
Imported in `image_ingest.py` and `image_search.py` for embedding operations.

- Generates embeddings for both images and text (CLIP-based).
- Supports cosine similarity for semantic search and retrieval.

![alt text](<Screenshot from 2026-01-08 12-52-49.png>)
---

## 3. image_search.py
Performs semantic search over processed images using text queries and cosine similarity.  
- Retrieves top-K images by CLIP cosine similarity on stored OCR+caption embeddings.
- Converts query to a CLIP text embedding and scores images.
- Returns ranked top-K matches with score and metadata (path/ID, OCR, caption).
- Supports single or batched queries; K is configurable.


![alt text](<Screenshot from 2026-01-08 12-57-05.png>)
---
