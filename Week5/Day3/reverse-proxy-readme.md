Running Multiple Backend Instances with an NGINX Reverse Proxy (Load Balancer)
A concise guide for running two Node.js backend instances behind an NGINX reverse proxy using Docker Compose.

1. Objective
- Run two instances of the same Node.js backend
- Load balance traffic between them with NGINX (round-robin)

2. Folder structure
project-root/
├── server/              # backend code
├── client/              # frontend
├── nginx/
│   └── nginx.conf       # reverse proxy config
└── docker-compose.yml   # multi-service setup

3. Docker Compose (summary)
- backend-primary: built from ./server, container port 5000, host port 5001
- backend-secondary: built from ./server, container port 5000, host port 5002
- load-balancer (NGINX): official nginx image, mounts ./nginx/nginx.conf, host port 5000
- database: MongoDB container
- frontend: served as a separate service in compose

4. Minimal nginx.conf
http {
    upstream backend_cluster {
        server backend-primary:5000;
        server backend-secondary:5000;
    }
    server {
        listen 5000;
        location /api/ {
            proxy_pass http://backend_cluster;
        }
    }
}

Compose service snippet:
services:
  load-balancer:
    image: nginx:latest
    ports:
      - "5000:5000"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro

5. Run
docker compose up -d --build

6. Verify
- Confirm containers: backend-primary, backend-secondary, load-balancer, database, frontend
- Check load-balancer logs for successful DNS resolution of backend-primary and backend-secondary
- Test round-robin: open http://localhost:5000/api and refresh — responses should alternate (e.g., "Response from backend-primary", "Response from backend-secondary")

