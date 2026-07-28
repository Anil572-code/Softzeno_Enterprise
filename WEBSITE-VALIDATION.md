# Website Validation Strategy

The delivery installer performs validation in two stages.

## Pre-mutation stage

1. Copies the current project to an isolated temporary directory.
2. Attaches the already installed project dependencies without reinstalling them.
3. Applies the complete website payload.
4. Formats the staged source with the pinned Prettier version.
5. Runs strict TypeScript validation.
6. Runs ESLint with zero warnings allowed.
7. Runs a complete Prettier check.
8. Runs the production Vite build.

The real project is not modified unless every staged gate passes.

## Actual-project stage

1. Creates a timestamped source backup.
2. Applies the exact formatted and validated staged files.
3. Updates the local site URL to port 6066 while preserving other `.env` values.
4. Runs the same validation gates in the actual project.
5. Restores the backup automatically if any actual-project gate fails.

No server is started, stopped, killed or restarted by the installer.
