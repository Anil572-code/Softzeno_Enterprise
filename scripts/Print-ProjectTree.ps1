Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$ProjectRoot = Split-Path `
    -Parent `
    $PSScriptRoot

Get-ChildItem `
    -LiteralPath `
    $ProjectRoot `
    -Recurse `
    -Force |
    Where-Object {
        $_.FullName -notmatch "\\node_modules(\\|$)" -and
        $_.FullName -notmatch "\\dist(\\|$)"
    } |
    ForEach-Object {
        $_.FullName.Substring($ProjectRoot.Length).TrimStart("\\")
    }
