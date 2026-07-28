Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$ProjectRoot = Split-Path `
    -Parent `
    $PSScriptRoot

Set-Location `
    -LiteralPath `
    $ProjectRoot

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    throw "Node.js is required but was not found in PATH."
}

if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
    throw "npm is required but was not found in PATH."
}

Write-Host "Running SARAS foundation validation..." -ForegroundColor Cyan

& npm run validate
if ($LASTEXITCODE -ne 0) {
    throw ("SARAS foundation validation failed with exit code {0}." -f $LASTEXITCODE)
}

Write-Host "PASS: SARAS foundation validation completed." -ForegroundColor Green
