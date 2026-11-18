# ZionCore 1

Complete ZionCore 1 application source in a pnpm monorepo. The public root is ZionCore Frequency Lab; the separate ZionCore 2 experience is served under /zioncore-2nd/. The API server and shared libraries are included.

## Build and verification

- Use Node.js 24 and pnpm (see package.json and pnpm-workspace.yaml).
- Install: `pnpm install --frozen-lockfile`
- Run release checks: `pnpm run verify:release`
- Replit artifact entry points and local workflows are documented in each artifact directory.

## Configuration and secrets

Environment-specific values are intentionally not committed. Configure required credentials through the deployment platform's secret manager. Safe variable-name templates are in the relevant artifact `.env.example` files and setup guides. Never commit service-account JSON, API secrets, payment secrets, passwords, or customer data.

The checked-in Replit configuration retains workflow and deployment structure, but its local and production value blocks were removed from this public snapshot.

## Included applications

- `artifacts/zioncore-frequency-lab` — ZionCore 1
- `artifacts/zioncore-2nd` — separately preserved ZionCore 2
- `artifacts/api-server` — shared API services
- `lib/` — shared contracts, clients, integrations, and data packages
