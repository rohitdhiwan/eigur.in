#!/bin/bash

# Script to start the orchestrator service

echo "🚀 Starting Multi-Agent Orchestration System..."

# Start all team containers
echo "🐳 Starting Docker containers..."
docker-compose up -d

if [ $? -eq 0 ]; then
    echo "✅ Docker containers started successfully"
else
    echo "❌ Failed to start Docker containers"
    exit 1
fi

# Wait for containers to be ready
echo "⏳ Waiting for containers to be ready..."
sleep 10

# Check container status
echo "🔍 Checking container status..."
docker-compose ps

echo "🎉 Multi-Agent Orchestration System is now running!"
echo ""
echo "📊 Services:"
echo "   Research Team: localhost:8081"
echo "   Technical Team: localhost:8082"
echo "   Creative Team: localhost:8083"
echo "   Integration Team: localhost:8084"
echo "   Analysis Team: localhost:8085"
echo "   Operations Team: localhost:8086"
echo "   DevOps Team: localhost:8087"
echo "   QA Team: localhost:8088"
echo "   Security Team: localhost:8089"
echo "   Orchestrator: localhost:8090"
echo ""
echo "💡 To view logs: docker-compose logs -f"
echo "💡 To stop the system: docker-compose down"