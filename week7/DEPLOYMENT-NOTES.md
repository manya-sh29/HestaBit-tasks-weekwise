# Day 5 — Advanced RAG + Memory + Evaluation (Capstone)

Small production-ready RAG service with conversational memory, refinement loops, hallucination detection, scoring, and logging.


## #Key features
- Memory for last 5 messages
- Refinement loop + self-critique
- Hallucination detection 
- Confidence score and faithfulness score
- Conversation logging (CHAT-LOGS.json)
- Simple Streamlit UI 


## #Flowchart

```
User Query
│
▼
API Layer (FastAPI)
│
├── Memory Retrieval (Last 5 messages)
│
├── Retriever (Hybrid: BM25 + Embeddings)
│ └── Reranker (Cross-Encoder / Cosine)
│
├── Context Builder (Dedup + Ranking)
│
├── LLM Generation
│ └── Refinement Loop (Self-Critique)
│
├── Evaluation Layer
│ ├── Context Match Score
│ ├── Faithfulness Score
│ ├── Hallucination Detection
│ └── Confidence Score
│
└── Logging (CHAT-LOGS.json)
```


## #Important files
- deployment/app.py — API endpoints (/ask, /ask-image, /ask-sql) and server
- evaluation/rag_eval.py — Confidence score, faithfulness score,hallucination detection evaluation utilities
- memory/memory_store.py — memory abstraction (Vector/Redis/Local)
- CHAT-LOGS.json — persistent request/response logs
- deployement/app_ui.py: Streamlit UI client


## #API
 Testing through postman with confidence score, hallucination detction and faithfulness score.
- POST /ask — 
Accepts a text question and returns an answer using the RAG pipeline (retrieval + LLM reasoning with memory, evaluation, and hallucination checks).
![alt text](w7_ask.png)
---

- POST /ask-image —
Accepts an image (and optional text query), extracts visual/text information (OCR/captioning), and answers the question using multimodal RAG.
![alt text](W7_ask-image.png)
---

- POST /ask-sql —
Accepts a natural-language query, converts it into a safe SQL query, executes it on the database, and returns the summarized result.
![alt text](w7_2-1.png)
---


## #screenshots-

![alt text](<Screenshot from 2026-01-09 16-09-22.png>)

---

![alt text](image.png)


## #Logs & testing
- All interactions and critique traces appended to CHAT-LOGS.json.
- Use evaluation/rag_eval.py for automated faithfulness score, confidence score hallucination checks.



