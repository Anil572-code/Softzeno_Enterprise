# Foundation validation record

## Release

- Package: `softzeno-tech-enterprise-website`
- Foundation version: `0.1.0`
- Scope: architecture and shared infrastructure only
- Marketing page content: intentionally deferred
- Design System: intentionally deferred

## Validation completed in the build environment

| Check                                   | Result                           |
| --------------------------------------- | -------------------------------- |
| TypeScript and TSX syntax transpilation | Pass — 87 implementation modules |
| Internal `@/` alias import resolution   | Pass                             |
| Required lazy route-module boundaries   | Pass — 14 routes                 |
| JSX inline-style policy                 | Pass                             |
| Raw component colour policy             | Pass                             |
| Source-module size policy               | Pass                             |
| JSON parsing                            | Pass                             |
| CSS structural brace validation         | Pass                             |
| JavaScript configuration syntax         | Pass                             |
| Supplied Softzeno Tech logo integrity   | Pass                             |

The supplied logo was copied byte-for-byte into
`src/assets/brand/softzeno.png` and retained as the protected source brand artwork.

## Dependency-backed validation status

The build environment could not resolve `registry.npmjs.org`, so it could not download the
pinned npm dependencies. Consequently, the real dependency-backed commands below were not
misrepresented as completed:

```text
npm run typecheck
npm run lint
npm run format:check
npm run build
```

Run the included PowerShell setup script on a network-enabled development machine. It installs
the pinned dependencies and executes the complete validation pipeline without starting a server:

```powershell
& powershell.exe `
    -NoProfile `
    -ExecutionPolicy Bypass `
    -File ".\scripts\Setup-Foundation.ps1"
```
