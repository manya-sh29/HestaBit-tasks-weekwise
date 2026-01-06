import sqlite3
import re

from src.utils.schema_loader import load_schema
from src.generator.sql_generator import generate_sql


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


def summarize_result(columns, rows) -> str:
    if not rows:
        return "No results found."

    summary = "Results:\n"
    for row in rows:
        summary += ", ".join(
            f"{col}: {val}" for col, val in zip(columns, row)
        ) + "\n"
    return summary


def sql_qa_pipeline(user_query: str, db_path: str):
    schema = load_schema(db_path)

    sql = generate_sql(user_query, schema)

    if not validate_sql(sql, schema):
        return "Generated SQL is unsafe or invalid."

    columns, rows = execute_sql(db_path, sql)

    return summarize_result(columns, rows)
