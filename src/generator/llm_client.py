import yaml
from sentence_transformers import SentenceTransformer

def load_model_config():
    with open("config/model.yaml", "r") as f:
        return yaml.safe_load(f)
class LocalLLMClient:
    def __init__(self, model_name: str):
        self.model = SentenceTransformer(model_name)

    def generate(self, text: str):
        
        return self.model.encode(text)
def get_llm_client():
    config = load_model_config()

    if config["provider"] != "local":
        raise ValueError("Only local provider is supported in Day 1")

    return LocalLLMClient(config["model_name"])
