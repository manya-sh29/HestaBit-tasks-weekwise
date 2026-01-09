import sys
import os

sys.path.append(os.path.abspath(os.path.dirname(__file__)))

from src.pipelines.sql_pipeline import sql_qa_pipeline

db_path = "data/mydb.db"

if not os.path.exists(db_path):
    raise FileNotFoundError(f"Database file not found at {db_path}")

test_queries = [
    "Show total sales by artist for 2023.",
    "List all artists with sales greater than 1200.",
]

for query in test_queries:
    print(f"\nUser query: {query}")
    result = sql_qa_pipeline(query, db_path)
    print("Output:")
    print(result)




