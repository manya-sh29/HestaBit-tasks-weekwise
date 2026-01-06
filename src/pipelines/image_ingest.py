import sys
import os
import torch
import numpy as np
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "../embeddings")))

from PIL import Image
import pytesseract
from clip_embedder import CLIPEmbedder
from transformers import BlipProcessor, BlipForConditionalGeneration, CLIPProcessor

RAW_IMAGE_FOLDER = "/home/manyasharma/Desktop/Week7-tasks/src/data/raw/images"

clip = CLIPEmbedder()

if not hasattr(clip, "tokenizer"):
    clip.processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")
    clip.tokenizer = clip.processor.tokenizer

blip_processor = BlipProcessor.from_pretrained("Salesforce/blip-image-captioning-base")
blip_model = BlipForConditionalGeneration.from_pretrained("Salesforce/blip-image-captioning-base")

def ocr_image(image_path):
    image = Image.open(image_path).convert("RGB")
    text = pytesseract.image_to_string(image)
    return text.strip()

def caption_image(image_path):
    image = Image.open(image_path).convert("RGB")
    inputs = blip_processor(images=image, return_tensors="pt")
    out = blip_model.generate(**inputs)
    caption = blip_processor.decode(out[0], skip_special_tokens=True)
    return caption

def process_image(image_path):
    ocr_text = ocr_image(image_path)
    caption = caption_image(image_path)
    image_emb = clip.embed_image(image_path)

    combined_text = ocr_text + " " + caption if ocr_text else caption

    inputs = clip.tokenizer(
        combined_text,
        return_tensors="pt",
        truncation=True,
        max_length=77
    )

    with torch.no_grad():
        text_emb = clip.model.get_text_features(**inputs).squeeze().numpy()

    return {
        "image_path": image_path,
        "ocr_text": ocr_text,
        "caption": caption,
        "image_embedding": image_emb,
        "text_embedding": text_emb,
    }

def main():
    if not os.path.exists(RAW_IMAGE_FOLDER):
        print(f"Error: RAW_IMAGE_FOLDER '{RAW_IMAGE_FOLDER}' does not exist!")
        return

    all_files = os.listdir(RAW_IMAGE_FOLDER)
    images = [f for f in all_files if f.lower().endswith((".png", ".jpg", ".jpeg"))]

    processed_data = []
    for img_file in images:
        path = os.path.join(RAW_IMAGE_FOLDER, img_file)
        print(f"Processing {path}...")
        data = process_image(path)
        processed_data.append(data)

    # Print results
    for data in processed_data:
        print(f"Image: {data['image_path']}")
        print(f"OCR Text: {data['ocr_text']}")
        print(f"Caption: {data['caption']}\n")

    # Save processed data for retrieval
    output_file = os.path.abspath(os.path.join(os.path.dirname(__file__), "../data/processed_image_data.npy"))
    np.save(output_file, processed_data)
    print(f"\nProcessed data saved to '{output_file}'")

if __name__ == "__main__":
    main()
