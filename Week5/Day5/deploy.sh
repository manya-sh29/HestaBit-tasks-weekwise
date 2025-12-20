#!/bin/bash

echo "Stopping old containers..."
docker compose -f docker-compose.yml down

echo "Building new images..."
docker compose -f docker-compose.yml build --no-cache

echo "Starting containers..."
docker compose -f docker-compose.yml up -d

echo "Deployment complete!"
docker ps