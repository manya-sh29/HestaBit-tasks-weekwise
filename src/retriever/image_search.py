import os
import sys
import torch
import numpy as np

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "../embeddings")))

from clip_embedder import CLIPEmbedder

DATA_PATH = os.path.abspath(
    os.path.join(os.path.dirname(__file__), "../data/processed_image_data.npy")
)

if not os.path.exists(DATA_PATH):
    raise FileNotFoundError(
        "processed_image_data.npy not found. Run image_ingest.py first."
    )

image_data = np.load(DATA_PATH, allow_pickle=True)

clip = CLIPEmbedder()

def cosine_similarity(a, b):
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

def embed_query(query: str):
    inputs = clip.processor(
        text=query,
        return_tensors="pt",
        truncation=True
    )
    with torch.no_grad():
        return clip.model.get_text_features(**inputs).squeeze().numpy()

def retrieve_candidates(query_embedding):
    scores = []
    for item in image_data:
        score = cosine_similarity(query_embedding, item["image_embedding"])
        scores.append(score)
    return scores

def rerank(scores, top_k=5):
    indices = np.argsort(scores)[::-1][:top_k]
    return [image_data[i] for i in indices]

def search_images(query, top_k=5):
    """
    Day-3 Retrieval Flow:
    Query → CLIP embedding → similarity scoring → reranking → traceable results
    """
    query_emb = embed_query(query)
    scores = retrieve_candidates(query_emb)
    results = rerank(scores, top_k)
    return results

def main():
    print("Multimodal Image Search (CLIP-based)")
    print("Type 'exit' to quit")

    while True:
        query = input("\nSearch query: ")
        if query.lower() == "exit":
            break

        results = search_images(query, top_k=5)

        print("\nTop Results:")
        for idx, res in enumerate(results, 1):
            print(f"\nResult {idx}")
            print(f"Image Path : {res['image_path']}")
            print(f"OCR Text  : {res['ocr_text'][:200]}")
            print(f"Caption   : {res['caption']}")

if __name__ == "__main__":
    main()
