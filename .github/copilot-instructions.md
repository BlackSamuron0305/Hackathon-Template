# Copilot Instructions for Hackathon-Template

## Golden Rule

**Always check the current project structure before making any changes.** Use `list_dir` or `tree` to verify what exists. Never assume files or folders are in a specific location — the codebase evolves.

## Project Architecture

```
├── src/
│   ├── app/                    # Next.js App Router (frontend)
│   │   ├── (website)/          # Public pages (landing, contact, login, signup)
│   │   ├── (user)/             # Authenticated user pages (dashboard, profile, settings)
│   │   ├── (admin)/            # Admin pages (overview, users, settings)
│   │   ├── auth/               # Auth callback route
│   │   ├── layout.tsx          # Root layout
│   │   └── globals.css         # Global styles
│   ├── backend/                # Server-side logic
│   │   └── database/           # Supabase client, auth actions, queries
│   │       ├── supabase/       # Supabase client (client.ts, server.ts, middleware.ts)
│   │       ├── auth.ts         # Server actions: login, signup, signout
│   │       └── index.ts        # DB query helpers
│   ├── ai-service/             # AI service integration (placeholder)
│   └── middleware.ts           # Next.js middleware entry
├── tests/                      # All tests
│   ├── integration/            # Integration tests (auth, api, database)
│   ├── e2e/                    # End-to-end tests
│   ├── unit/                   # Unit tests
│   └── setup.ts                # Shared test utilities
├── .github/                    # GitHub config
│   ├── copilot-instructions.md # These instructions
│   └── workflows/              # CI/CD workflows
└── .env.local                  # Single global env file (root only)
```

## Key Rules

1. **Single .env file** — Only one `.env.local` at the project root. No nested env files.
2. **Route groups** — `(website)`, `(user)`, `(admin)` are Next.js route groups. Parentheses mean the folder name is NOT part of the URL.
3. **Imports** — Use `@/` path alias which maps to `./src/`. Example: `@/backend/database/supabase/server`.
4. **Auth** — Server actions in `@/backend/database/auth`. Supabase clients in `@/backend/database/supabase/`.
5. **Tests** — Place integration tests in `tests/integration/`, e2e in `tests/e2e/`, unit in `tests/unit/`.
6. **No lib/ folder** — All backend logic lives in `src/backend/`. Do not create `src/lib/`.

## Before Any Change

- Run `list_dir` on the relevant directory
- Verify the file you want to edit actually exists at the expected path
- Check imports resolve to real files
- After changes, run `npm run build` to verify
