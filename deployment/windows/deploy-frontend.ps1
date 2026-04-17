$ErrorActionPreference = "Stop"

Write-Host "Deploying frontend image..."
docker rm -f hackathon-frontend 2>$null

docker run -d --name hackathon-frontend -p 3000:3000 `
  -e NEXT_PUBLIC_SUPABASE_URL=$env:NEXT_PUBLIC_SUPABASE_URL `
  -e NEXT_PUBLIC_SUPABASE_ANON_KEY=$env:NEXT_PUBLIC_SUPABASE_ANON_KEY `
  hackathon-template/frontend:latest

Write-Host "Frontend deployed on http://localhost:3000"
