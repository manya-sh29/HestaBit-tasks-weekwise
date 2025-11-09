DAY 4 — HTTP / API FORENSICS (USING CURL + POSTMAN + HEADERS)

#Overview
This project focuses on exploring HTTP request-response cycles and API forensics using CURL, Postman, and a custom Node.js HTTP server. It covers header manipulation, pagination, ETag caching, and building simple endpoints to observe request handling.

#Folder Structure
Day4-HTTP-Forensics/
│  
├── curl-lab.txt          
├── api-investigation.md  
├── server.js             
├── screenshots/  

<img width="1920" height="1080" alt="Screenshot from 2025-11-07 09-52-56" src="https://github.com/user-attachments/assets/768be8c8-c54b-4b90-aaa0-258a430bc318" />

🧩 Step-by-Step Process

🔹 Step 1: DNS Lookup & Traceroute
Performed DNS resolution and traced the network path to the API server.
Commands:
nslookup dummyjson.com
traceroute dummyjson.com
<img width="1920" height="1080" alt="Screenshot from 2025-11-07 12-16-12" src="https://github.com/user-attachments/assets/7d41639f-e6ed-4028-9564-379847448b30" />


🔹 Step 2: API Requests Using CURL
Fetched paginated data from dummyjson.com using CURL with limit and skip parameters.
Command:
curl -v "https://dummyjson.com/products?limit=5&skip=10"
<img width="1920" height="1080" alt="Screenshot from 2025-11-07 12-16-23" src="https://github.com/user-attachments/assets/9f96f76e-3e7a-4362-b59e-b4af00965d69" />



🔹 Step 3: Header Modification & Observation
Removed User-Agent header.
Sent fake Authorization header.
Compared differences in server responses to observe how headers affect behavior.
<img width="1920" height="1080" alt="Screenshot from 2025-11-07 12-16-23 (Copy)" src="https://github.com/user-attachments/assets/8ad1e186-eba4-4c44-a203-de280545f0d0" />



🔹 Step 4: ETag Caching
Retrieved ETag from initial response headers.
Re-sent request using If-None-Match header:
command
curl -H "If-None-Match: <etag>" "https://dummyjson.com/products?limit=5&skip=10"
<img width="1920" height="1080" alt="Screenshot from 2025-11-07 12-16-38" src="https://github.com/user-attachments/assets/51c7aef1-fe38-435f-882a-1e02747f016a" />



🔹 Step 5: Node.js HTTP Server
Created server.js with custom endpoints:
/echo → Returns incoming request headers.
/slow?ms=3000 → Delays response based on query parameter (ms).
/cache → Returns custom cache headers to simulate caching behavior.

#Output Details
✅ CURL Requests & Responses (curl-lab.txt)
Contains all CURL commands used and the server responses captured, including headers and body.
✅ API Analysis (api-investigation.md)
Pagination observed with limit and skip.
Header differences when modifying User-Agent and Authorization.
Caching behavior using ETag and If-None-Match.
✅ Node.js Server Behavior (server.js)
/echo → Returns headers as JSON.
/slow → Delays response for testing timeouts and latency.
/cache → Demonstrates cache headers and status codes.
✅ POSTMAN Screenshots (screenshots/)
Visual documentation of requests and responses for all API endpoints tested in Postman.

🙌 Author Manya Sharma B.Tech CSE | DAY 4 — HTTP / API FORENSICS (USING CURL + POSTMAN + HEADERS)(HestaBit Internship Program)
