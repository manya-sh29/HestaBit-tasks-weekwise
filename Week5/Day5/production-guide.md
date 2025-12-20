# myproject — Production Guide

## Overview
Services:
- server — Node API (server/)
- client — frontend (client/)
- nginx — TLS termination, reverse proxy, load balancing (nginx/)
- certs — nginx/certs (loaclhost.pem, localhost-key.pem)

## Project structure (key files)
```
myproject/
├── deploy.sh
├── docker-compose.yml
├── production-guide.md
├── client/
│   └── index.html
├── nginx/
│   ├── nginx.conf
│   └── certs/
│       ├── localhost-key.pem
│       └── localhost.pem
└── server/
    ├── Dockerfile
    └── server.js
```

## TLS certificates
Place certificates in nginx/certs/ or mount a host cert directory (read-only) into the nginx container. Ensure nginx.conf points to the container paths, for example:
ssl_certificate /etc/nginx/ssl/week5.day5.pem;
ssl_certificate_key /etc/nginx/ssl/week5.day5-key.pem;

## Deploy
Make the script executable and run:
chmod +x deploy.sh
./deploy.sh

## Health check
Add to server/server.js:
app.get('/health', (req, res) => res.send('OK'));
This is used by container healthchecks and monitoring.
