import json
import os
from typing import List, Dict

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CHAT_LOGS = os.path.join(BASE_DIR, "memory", "CHAT-LOGS.json")

def load_chat_logs() -> List[Dict]:
    if not os.path.exists(CHAT_LOGS):
        return []
    with open(CHAT_LOGS, "r") as f:
        return json.load(f)

def compute_confidence(answer: str, context: str) -> float:
    if not answer:
        return 0.0

    length_score = min(len(answer.split()) / 100, 1.0)
    overlap = set(answer.lower().split()) & set(context.lower().split())
    grounding_score = min(len(overlap) / 15, 1.0)

    return round(0.5 * length_score + 0.5 * grounding_score, 2)


def detect_hallucination(answer: str, context: str) -> bool:
   
    if not answer or not context:
        return False

    overlap = set(answer.lower().split()) & set(context.lower().split())
    return len(overlap) < 5


def faithfulness_score(answer: str, context: str) -> float:
   
    if not answer or not context:
        return 0.0

    answer_tokens = set(answer.lower().split())
    context_tokens = set(context.lower().split())
    overlap = answer_tokens & context_tokens

    return round(min(len(overlap) / max(len(answer_tokens), 1), 1.0), 2)


def evaluate(answer: str, context: str) -> Dict:
    logs = load_chat_logs()
    recent_context = "\n".join([m["content"] for m in logs[-5:]]) if logs else context

    return {
        "confidence": compute_confidence(answer, recent_context),
        "hallucinated": detect_hallucination(answer, recent_context),
        "faithfulness": faithfulness_score(answer, recent_context),
    }


