import pickle

with open('src/vectorstore/metadata.pkl', 'rb') as file:
    data = pickle.load(file)

def main():
    print(data[0])

if __name__ == "__main__":
    main()
