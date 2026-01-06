import sqlite3
import os


db_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "../data/mydb.db"))
os.makedirs(os.path.dirname(db_path), exist_ok=True)


conn = sqlite3.connect(db_path)
cursor = conn.cursor()


cursor.execute("""
CREATE TABLE IF NOT EXISTS sales (
    artist TEXT,
    amount INTEGER,
    year INTEGER
)
""")


cursor.executemany("""
INSERT INTO sales (artist, amount, year) VALUES (?, ?, ?)
""", [
    ('Artist A', 1000, 2023),
    ('Artist B', 1500, 2023),
    ('Artist A', 1200, 2024),
    ('Artist C', 2000, 2023)
])


cursor.execute("SELECT * FROM sales")
rows = cursor.fetchall()

print("Records in sales table:")
for row in rows:
    print(row)


conn.commit()
conn.close()

print("\nDatabase created successfully!")
print(f"Database location: {db_path}")
