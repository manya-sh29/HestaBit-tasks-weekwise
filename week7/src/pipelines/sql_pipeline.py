import sqlite3
import re

from utils.schema_loader import load_schema
from generator.sql_generator import generate_sql
from generator.llm_client import LocalLLMClient


def validate_sql(sql: str, schema: dict) -> bool:
    blocked = ["DROP", "DELETE", "UPDATE", "INSERT", "ALTER"]
    if any(word in sql.upper() for word in blocked):
        return False

    tables = schema.keys()
    return any(table in sql for table in tables)


def execute_sql(db_path: str, sql: str):
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    cursor.execute(sql)
    rows = cursor.fetchall()
    columns = [desc[0] for desc in cursor.description]
    conn.close()
    return columns, rows


def summarize_result(question, columns, rows) -> str:
    if not rows:
        return "No results found."
        
    preview = "/n".join(
        [", ".join(map(str, columns))]
        + [", ".join(map(str, row)) for row in rows[:10]]
    )
    llm = LocalLLMClient()
    prompt = f"""
    You are an expert data analyst.

    User question:
    {question}

    SQL query result preview:
    {preview}

    Summarize the result in a concise manner.
    """

    return llm.generate(prompt)

def sql_qa_pipeline(user_query: str, db_path: str):
    schema = load_schema(db_path)

    sql = generate_sql(user_query, schema)

    if not validate_sql(sql, schema):
        return "Generated SQL is unsafe or invalid."

    columns, rows = execute_sql(db_path, sql)
    print("SQL Execution Result:", columns, rows)
    result = summarize_result(user_query, columns, rows)
    print("Final Answer:", result)
    return result
