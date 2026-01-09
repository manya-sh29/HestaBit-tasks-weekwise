import streamlit as st
import requests

API_URL = "http://127.0.0.1:8000"

st.set_page_config(
    page_title="Day 5 Advanced RAG",
    layout="centered"
)

st.title("Advanced RAG System")
st.caption("Day 5 Capstone — Memory • Evaluation • Hallucination Detection")

mode = st.radio(
    "Choose Query Type",
    ["Text QA", "Image QA", "SQL QA"]
)


if mode == "Text QA":
    st.subheader("Ask from Documents")

    question = st.text_input("Enter your question")

    if st.button("Ask"):
        if question.strip() == "":
            st.warning("Please enter a question.")
        else:
            with st.spinner("Thinking..."):
                response = requests.post(
                    f"{API_URL}/ask",
                    params={"question": question},
                    timeout=9000
                )

            if response.status_code == 200:
                data = response.json()
                st.success("Answer")
                st.write(data["answer"])
            else:
                st.error("Error from backend")


elif mode == "Image QA":
    st.subheader("Ask from Image")

    uploaded_file = st.file_uploader(
        "Upload an image",
        type=["png", "jpg", "jpeg"]
    )
    question = st.text_input("Enter your question about the image")

    if st.button("Ask Image"):
        if uploaded_file is None:
            st.warning("Please upload an image.")
        else:
            with st.spinner("Analyzing image..."):
                files = {
                    "file": uploaded_file
                }
                data = {
                    "question": question if question else "Explain the image"
                }

                response = requests.post(
                    f"{API_URL}/ask-image",
                    files=files,
                    data=data,
                    timeout=9000
                )

            if response.status_code == 200:
                result = response.json()
                st.success("Answer")
                st.write(result["answer"])
            else:
                st.error("Error from backend")


elif mode == "SQL QA":
    st.subheader("Ask from Database")

    question = st.text_input("Enter SQL-related question")

    if st.button("Ask SQL"):
        if question.strip() == "":
            st.warning("Please enter a question.")
        else:
            with st.spinner("Querying database..."):
                response = requests.post(
                    f"{API_URL}/ask-sql",
                    params={"question": question},
                    timeout=9000
                )

            if response.status_code == 200:
                result = response.json()
                st.success("Answer")
                st.write(result["answer"])
            else:
                st.error("Error from backend")
