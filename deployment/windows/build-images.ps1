$ErrorActionPreference = "Stop"

Set-Location "$PSScriptRoot\..\.."
Write-Host "Running tests before image builds..."
npm ci
npm run test:only

Write-Host "Building frontend image..."
docker build -f deployment/docker/frontend.Dockerfile -t hackathon-template/frontend:latest .

Write-Host "Building backend image..."
docker build -f deployment/docker/backend.Dockerfile -t hackathon-template/backend:latest .

Write-Host "Building ai-service image..."
docker build -f deployment/docker/ai-service.Dockerfile -t hackathon-template/ai-service:latest .

Write-Host "All images built successfully."
