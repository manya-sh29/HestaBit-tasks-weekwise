from src.generator.llm_client import get_llm_client
import re

llm = get_llm_client()

def generate_sql(user_query: str, schema: dict) -> str:
    schema_text = ""
    for table, columns in schema.items():
        schema_text += f"Table {table}: {', '.join(columns)}\n"

    prompt = f"""
You are an expert SQL generator.

Database schema:
{schema_text}

Rules:
- Return ONLY a SQL query
- Start directly with SELECT
- No explanations
- No markdown

User question:
{user_query}

SQL:
"""

    raw_output = llm.generate(prompt)
    text = str(raw_output)

    match = re.search(r"(SELECT .*?;)", text, re.IGNORECASE | re.DOTALL)

    if not match:
        raise ValueError("LLM did not return valid SQL")

    sql = match.group(1).strip()
    print("Generated SQL:", sql)
    return sql



