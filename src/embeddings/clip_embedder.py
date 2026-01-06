import torch
import numpy as np
from PIL import Image
from transformers import CLIPProcessor, CLIPModel


class CLIPEmbedder:
    def __init__(self, model_name="openai/clip-vit-base-patch32"):
        self.device = "cuda" if torch.cuda.is_available() else "cpu"
        self.model = CLIPModel.from_pretrained(model_name).to(self.device)
        self.processor = CLIPProcessor.from_pretrained(model_name)

    def embed_image(self, image_path: str) -> np.ndarray:
        image = Image.open(image_path).convert("RGB")
        inputs = self.processor(images=image, return_tensors="pt").to(self.device)

        with torch.no_grad():
            features = self.model.get_image_features(**inputs)

        features = features / features.norm(dim=-1, keepdim=True)
        return features.cpu().numpy()[0]

    def embed_text(self, text: str) -> np.ndarray:
        inputs = self.processor(text=[text], return_tensors="pt", padding=True).to(self.device)

        with torch.no_grad():
            features = self.model.get_text_features(**inputs)

        features = features / features.norm(dim=-1, keepdim=True)
        return features.cpu().numpy()[0]


if __name__ == "__main__":
    embedder = CLIPEmbedder()

    image_embedding = embedder.embed_image("/home/manyasharma/Desktop/Week7-tasks/src/data/raw/images/_page_4_Picture_7.jpeg")
    print("Image embedding shape:", image_embedding.shape)

    text_embedding = embedder.embed_text("Engineering diagram of a hydraulic system")
    print("Text embedding shape:", text_embedding.shape)
