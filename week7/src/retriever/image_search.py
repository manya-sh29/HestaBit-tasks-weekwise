import os
import sys
import torch
import numpy as np
from PIL import Image

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "../embeddings")))

from src.embeddings.clip_embedder import CLIPEmbedder

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
   
    query_emb = embed_query(query)
    scores = retrieve_candidates(query_emb)
    results = rerank(scores, top_k)
    return results

def embed_image_query(image_path: str):
    image = Image.open(image_path).convert("RGB")
    inputs = clip.processor(images=image, return_tensors="pt")
    with torch.no_grad():
        return clip.model.get_image_features(**inputs).squeeze().numpy()
    


def search_by_image(image_path, top_k=5):
   
    image_emb = embed_image_query(image_path)
    scores = []
    for item in image_data:
        score = cosine_similarity(image_emb, item["image_embedding"])
        scores.append(score)

    indices = np.argsort(scores)[::-1][:top_k]
    return [image_data[0]]

def main():
    image_path="src/kpmg.png"

    results = search_by_image(image_path, top_k=5)
    print("\nTop Results:")
    print(results)

if __name__ == "__main__":
    main()
