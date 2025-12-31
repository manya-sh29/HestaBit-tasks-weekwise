from retriever import get_vectorstore

def run_query(query):
    vectorstore = get_vectorstore()
    results = vectorstore.similarity_search(query, k=5)  
    return results

if __name__ == "__main__":
    query = input("Enter your query: ")
    results = run_query(query)
    for i, doc in enumerate(results):
        print(f"{i+1}. {doc.page_content}")
