import numpy as np
from rank_bm25 import BM25Okapi

class HybridRetriever:
    def __init__(self, documents, embeddings, embedder):
        self.documents = documents
        self.embeddings = embeddings
        self.embedder = embedder

        tokenized_docs = [doc["text"].lower().split() for doc in documents]
        self.bm25 = BM25Okapi(tokenized_docs)

    def apply_filters(self, filters):
        if not filters:
            return self.documents, self.embeddings

        filtered_docs = []
        filtered_embs = []

        for doc, emb in zip(self.documents, self.embeddings):
            if all(doc.get(k) == v for k, v in filters.items()):
                filtered_docs.append(doc)
                filtered_embs.append(emb)

        return filtered_docs, np.array(filtered_embs)

    def rrf(self, rankings, k=60):
        scores = {}

        for rank_list in rankings:
            for rank, idx in enumerate(rank_list):
                scores[idx] = scores.get(idx, 0) + 1 / (k + rank + 1)

        return sorted(scores.items(), key=lambda x: x[1], reverse=True)

    def retrieve(self, query, top_k=5, filters=None):
        docs, embs = self.apply_filters(filters)

        if len(docs) == 0:
            docs, embs = self.documents, self.embeddings

        query_vec = self.embedder.encode(query)
        semantic_scores = np.dot(embs, query_vec)

        bm25_scores = self.bm25.get_scores(query.lower().split())

        semantic_rank = np.argsort(semantic_scores)[::-1]
        bm25_rank = np.argsort(bm25_scores)[::-1]

        fused_ranks = self.rrf([semantic_rank, bm25_rank])

        top_indices = [idx for idx, _ in fused_ranks[:top_k]]

        return [docs[i] for i in top_indices]
