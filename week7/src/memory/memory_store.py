import json
import os
from typing import List, Dict

MEMORY_LIMIT = 5

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MEMORY_FILE = os.path.join(BASE_DIR, "CHAT-LOGS.json")

class LocalMemory:
    def __init__(self, file_path: str = MEMORY_FILE, limit: int = MEMORY_LIMIT):
        self.file_path = file_path
        self.limit = limit

        os.makedirs(os.path.dirname(self.file_path), exist_ok=True)

        if not os.path.exists(self.file_path):
            with open(self.file_path, "w") as f:
                json.dump([], f)

    def load(self) -> List[Dict]:
        with open(self.file_path, "r") as f:
            return json.load(f)

    def save(self, messages: List[Dict]):
        with open(self.file_path, "w") as f:
            json.dump(messages[-self.limit:], f, indent=2)

    def add(self, role: str, content: str):
        messages = self.load()
        messages.append({"role": role, "content": content})
        self.save(messages)

    def get_recent(self) -> List[Dict]:
        return self.load()[-self.limit:]


class VectorMemory:
    def __init__(self, embedder, index):
        self.embedder = embedder
        self.index = index
        self.texts = []

    def add(self, text: str):
        emb = self.embedder.encode([text])
        self.index.add(emb)
        self.texts.append(text)

    def search(self, query: str, k: int = 3):
        q_emb = self.embedder.encode([query])
        _, ids = self.index.search(q_emb, k)
        return [self.texts[i] for i in ids[0] if i < len(self.texts)]


class RedisMemory:
    def __init__(self, redis_client, key="chat_memory"):
        self.redis = redis_client
        self.key = key

    def add(self, role: str, content: str):
        self.redis.rpush(self.key, json.dumps({"role": role, "content": content}))
        self.redis.ltrim(self.key, -MEMORY_LIMIT, -1)

    def get_recent(self):
        return [
            json.loads(x)
            for x in self.redis.lrange(self.key, -MEMORY_LIMIT, -1)
        ]


def get_memory(memory_type="local", **kwargs):
    if memory_type == "local":
        return LocalMemory(**kwargs)
    if memory_type == "vector":
        return VectorMemory(**kwargs)
    if memory_type == "redis":
        return RedisMemory(**kwargs)
    raise ValueError("Invalid memory type")


if __name__ == "__main__":
    LocalMemory()
