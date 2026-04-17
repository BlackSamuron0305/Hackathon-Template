$ErrorActionPreference = "Stop"

Write-Host "Deploying backend image..."
docker rm -f hackathon-backend 2>$null

docker run -d --name hackathon-backend -p 4000:4000 hackathon-template/backend:latest

Write-Host "Backend deployed on http://localhost:4000"
