# Deployment

This folder contains Docker deployment assets for:
- Frontend (`hackathon-template/frontend:latest`)
- Backend (`hackathon-template/backend:latest`)
- AI service (`hackathon-template/ai-service:latest`)

## Docker Compose

From the `deployment/` directory:

```bash
docker compose up -d --build
```

## Windows Scripts

Run from PowerShell:

- `deployment/windows/run-tests.ps1` → Runs tests only
- `deployment/windows/build-images.ps1` → Runs tests then builds all 3 images
- `deployment/windows/deploy-frontend.ps1` → Quick deploy frontend image
- `deployment/windows/deploy-backend.ps1` → Quick deploy backend image
- `deployment/windows/deploy-ai-service.ps1` → Quick deploy ai-service image
- `deployment/windows/deploy-all.ps1` → Compose deploy for all services
