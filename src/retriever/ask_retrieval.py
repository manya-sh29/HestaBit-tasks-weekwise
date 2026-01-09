from retriever.hybrid_retriever import HybridRetriever
from pipelines.context_builder import build_context
from generator.llm_client import get_llm_client


class AskRetrievalEngine:
    def __init__(self, documents, embeddings, embedder):
        self.retriever = HybridRetriever(
            documents=documents,
            embeddings=embeddings,
            embedder=embedder
        )
        self.llm = get_llm_client()

    def build_prompt(self, question, context):
        return f"""
You are a helpful AI assistant.
Answer the question strictly using the given context.
If the answer is not present in the context, say "I don't know".

Context:
{context}

Question:
{question}

Answer:
""".strip()

    def ask(self, question, top_k=5, filters=None):
        retrieved_docs = self.retriever.retrieve(
            query=question,
            top_k=top_k,
            filters=filters
        )

        context, sources = build_context(retrieved_docs)

        prompt = self.build_prompt(question, context)

        answer = self.llm.generate(prompt)

        return {
            "question": question,
            "answer": answer,
            "context": context,
            "sources": sources
        }
