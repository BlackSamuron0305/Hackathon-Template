$ErrorActionPreference = "Stop"

Set-Location "$PSScriptRoot\..\.."
Write-Host "Installing dependencies and running tests..."
npm ci
npm run test:only
Write-Host "Tests completed successfully."
