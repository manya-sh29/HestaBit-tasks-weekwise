import numpy as np
from sentence_transformers import CrossEncoder

class Reranker:
    def __init__(self, model_name="cross-encoder/ms-marco-MiniLM-L-6-v2"):
        self.model = CrossEncoder(model_name)

    def mmr(self, query_vec, doc_vecs, docs, top_k, lambda_param=0.5):
        selected = []
        selected_idx = []

        scores = np.dot(doc_vecs, query_vec)

        for _ in range(top_k):
            mmr_scores = []
            for i in range(len(docs)):
                if i in selected_idx:
                    continue

                relevance = scores[i]
                diversity = max(
                    [np.dot(doc_vecs[i], doc_vecs[j]) for j in selected_idx],
                    default=0
                )
                mmr_scores.append((lambda_param * relevance - (1 - lambda_param) * diversity, i))

            _, idx = max(mmr_scores)
            selected_idx.append(idx)
            selected.append(docs[idx])

        return selected

    def rerank(self, query, documents, embedder, top_k=5):
        texts = [doc["text"] for doc in documents]
        pairs = [(query, text) for text in texts]

        ce_scores = self.model.predict(pairs)
        ranked = sorted(zip(documents, ce_scores), key=lambda x: x[1], reverse=True)

        deduped = []
        seen = set()
        for doc, _ in ranked:
            if doc["text"] not in seen:
                deduped.append(doc)
                seen.add(doc["text"])

        doc_vecs = embedder.encode([d["text"] for d in deduped])
        query_vec = embedder.encode(query)

        return self.mmr(query_vec, doc_vecs, deduped, top_k)
