import yaml
import torch
from transformers import AutoModelForCausalLM, AutoTokenizer

def load_model_config():
    with open("config/model.yaml", "r") as f:
        return yaml.safe_load(f)

class LocalLLMClient:
    def __init__(self):
        self.tokenizer = AutoTokenizer.from_pretrained(
            "mistralai/Mistral-7B-Instruct-v0.2"
        )
        self.model = AutoModelForCausalLM.from_pretrained(
            "mistralai/Mistral-7B-Instruct-v0.2",
            device_map="auto",
            torch_dtype="auto"
        )

    def generate(self, text: str):
        inputs = self.tokenizer(text, return_tensors="pt").to(self.model.device)

        outputs = self.model.generate(
            **inputs,
            max_new_tokens=256,
            do_sample=False
        )

        decode = self.tokenizer.decode(outputs[0], skip_special_tokens=True)
        if decode.startswith(text):
            return decode[len(text):].strip()
        return decode.strip()

def get_llm_client():
    return LocalLLMClient()

from transformers import AutoModelForCausalLM
model = AutoModelForCausalLM.from_pretrained(
    "mistralai/Mistral-7B-Instruct-v0.2",
    device_map="auto",
    dtype="auto"
)
