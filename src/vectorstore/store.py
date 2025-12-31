import faiss
import pickle
import numpy as np

def store_vectors(embeddings, metadatas):
    embeddings = np.array(embeddings).astype("float32")
    dim = embeddings.shape[1]

    index = faiss.IndexFlatL2(dim)
    index.add(embeddings)

    faiss.write_index(index, "src/vectorstore/index.faiss")

    with open("src/vectorstore/metadata.pkl", "wb") as f:
        pickle.dump(metadatas, f)
