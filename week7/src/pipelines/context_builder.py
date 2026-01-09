def build_context(documents, max_tokens=1500):
    context_chunks = []
    sources = []
    token_count = 0

    for doc in documents:
        tokens = len(doc["text"].split())
        if token_count + tokens > max_tokens:
            break

        context_chunks.append(doc["text"])
        sources.append({
            "source": doc.get("source"),
            "page": doc.get("page"),
            "year": doc.get("year"),
            "type": doc.get("type")
        })
        token_count += tokens

    return "\n\n".join(context_chunks), sources
