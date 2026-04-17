$ErrorActionPreference = "Stop"

Set-Location "$PSScriptRoot\.."
Write-Host "Starting docker compose deployment..."
docker compose up -d --build
Write-Host "Frontend: http://localhost:3000"
Write-Host "Backend: http://localhost:4000"
Write-Host "AI Service: http://localhost:5000"
