SSL / HTTPS Setup Documentation

1.Overview
This document explains the HTTPS setup for the Day4 project using Docker and NGINX.

2.Server & Client Setup
- Backend server: Runs on port `5000` inside Docker container `server`.
- Frontend client: Runs on port `3000` inside Docker container `client`.
- NGINX:Reverse proxy for client and server with SSL.

3.NGINX SSL Configuration
- SSL certificates stored in `/etc/nginx/certs/`.
- `nginx.conf` configured to listen on port `443` (HTTPS) and redirect HTTP traffic to HTTPS.
- Upstream configured to point to client and server containers.

```nginx
server {
    listen 443 ssl;
    server_name localhost;

    ssl_certificate /etc/nginx/certs/server.crt;
    ssl_certificate_key /etc/nginx/certs/server.key;

    location / {
        proxy_pass http://client:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    location /api {
        proxy_pass http://server:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
