# Import guide — ZionCore 2nd source archive

This archive preserves ZionCore 2nd as the complete next-page extension of the existing ZionCore 1 site at `/zioncore-2nd/`. It is not a separate product or deployment.

Merge the repository-relative source paths into the existing main Replit project. Do not blindly overwrite root manifests, Firebase rules, credentials, or deployment configuration; compare and merge only required changes. The included workspace closure is the second app's declared shared dependency plus the corresponding workspace manifests and lockfile.

The complete founder-provided Genesis declaration is included byte-for-byte at `artifacts/zioncore-2nd/src/content/genesis-declaration.txt`; its SHA-256 is recorded in the manifest. The app renders it as plain text. AI requests use a compact, privacy-bounded Genesis context, not the full archival document. Archival text is not executable instructions or authorization for hidden actions.

No credential-bearing `.env`, service-account file, `node_modules`, build output, cache, or emulator log is included. Follow `ZIONCORE_2ND_MAIN_SITE_INSTALLATION_PLAN.md` for preservation-first integration, routes, security, validation, and single-site publication requirements.
