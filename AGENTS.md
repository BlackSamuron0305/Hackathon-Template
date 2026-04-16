<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Rules

## Golden Rule

**Always check the current project structure before making any changes.** Use `list_dir` or `tree` to verify what exists. Never assume files or folders are in a specific location — the codebase evolves.

## Key Constraints

- **Single `.env.local`** at the project root only. No nested env files anywhere.
- **No `lib/` folder** — all backend logic lives in `src/backend/`.
- **Route groups** — `(website)`, `(user)`, `(admin)` are Next.js route groups. Parentheses are not part of the URL.
- **Imports** — use `@/` path alias (maps to `./src/`).
- **Tests** — `tests/integration/`, `tests/e2e/`, `tests/unit/`.
- **After any change** — run `npm run build` to verify.

See `.github/copilot-instructions.md` for full details.
