[CmdletBinding()]
param(
    [switch]$SkipInstall
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$ProjectRoot = Split-Path `
    -Parent `
    $PSScriptRoot

Set-Location `
    -LiteralPath `
    $ProjectRoot

function Get-RequiredCommandVersion {
    param(
        [Parameter(Mandatory = $true)]
        [string]$CommandName,

        [Parameter(Mandatory = $true)]
        [version]$MinimumVersion,

        [Parameter(Mandatory = $true)]
        [scriptblock]$VersionCommand
    )

    if (-not (Get-Command $CommandName -ErrorAction SilentlyContinue)) {
        throw ("{0} is required but was not found in PATH." -f $CommandName)
    }

    $RawVersion = (& $VersionCommand | Select-Object -First 1).Trim().TrimStart("v")
    $ResolvedVersion = [version]$RawVersion

    if ($ResolvedVersion -lt $MinimumVersion) {
        throw (
            "{0} {1} or newer is required. Detected {2}." -f `
                $CommandName,
                $MinimumVersion,
                $ResolvedVersion
        )
    }

    Write-Host (
        "PASS: {0} {1} detected." -f `
            $CommandName,
            $ResolvedVersion
    ) -ForegroundColor Green
}

Get-RequiredCommandVersion `
    -CommandName "node" `
    -MinimumVersion ([version]"22.12.0") `
    -VersionCommand { & node --version }

Get-RequiredCommandVersion `
    -CommandName "npm" `
    -MinimumVersion ([version]"10.0.0") `
    -VersionCommand { & npm --version }

$EnvironmentPath = Join-Path `
    $ProjectRoot `
    ".env"

$EnvironmentExamplePath = Join-Path `
    $ProjectRoot `
    ".env.example"

if (-not (Test-Path -LiteralPath $EnvironmentPath)) {
    Copy-Item `
        -LiteralPath `
        $EnvironmentExamplePath `
        -Destination `
        $EnvironmentPath

    Write-Host "Created .env from .env.example." -ForegroundColor Cyan
}

if (-not $SkipInstall) {
    Write-Host "Installing pinned project dependencies..." -ForegroundColor Cyan

    & npm install
    if ($LASTEXITCODE -ne 0) {
        throw ("npm install failed with exit code {0}." -f $LASTEXITCODE)
    }
}

Write-Host "Running enterprise foundation quality gates..." -ForegroundColor Cyan

& npm run validate
if ($LASTEXITCODE -ne 0) {
    throw ("Foundation validation failed with exit code {0}." -f $LASTEXITCODE)
}

Write-Host "PASS: SARAS enterprise foundation is ready." -ForegroundColor Green
Write-Host "No development or preview server was started." -ForegroundColor Yellow
