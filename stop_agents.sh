#!/bin/bash

# Script to stop the orchestrator service

echo "🛑 Stopping Multi-Agent Orchestration System..."

# Stop all team containers
docker-compose down

if [ $? -eq 0 ]; then
    echo "✅ Multi-Agent Orchestration System stopped successfully"
else
    echo "❌ Failed to stop Docker containers"
    exit 1
fi

echo "👋 System has been shut down."