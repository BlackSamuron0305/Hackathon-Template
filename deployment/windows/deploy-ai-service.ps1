$ErrorActionPreference = "Stop"

Write-Host "Deploying ai-service image..."
docker rm -f hackathon-ai-service 2>$null

docker run -d --name hackathon-ai-service -p 5000:5000 hackathon-template/ai-service:latest

Write-Host "AI service deployed on http://localhost:5000"
