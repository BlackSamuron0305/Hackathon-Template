# 🚀 Hackathon Template

Next.js 16 + Supabase + Tailwind CSS — ready-to-go hackathon starter.

## What's Included

- **Authentication** — Login, Signup, Sign out with Supabase Auth
- **Route Protection** — Middleware redirects unauthenticated users
- **Role-Based Access** — `user` and `admin` roles via `profiles` table
- **Admin Panel** — `/admin` restricted to admin-role users
- **User Dashboard** — `/dashboard` for authenticated users
- **Landing Page** — Clean hero + features section at `/`
- **Contact Page** — `/contact` form
- **Auto Profile Creation** — DB trigger creates profile on signup
- **Dark Mode Ready** — Respects system color scheme
- **CI/CD** — GitHub Actions for build, lint, test, and PR validation

## Project Structure

> **Important:** Always check the current structure before making changes. Run `list_dir` or `tree` to verify.

```
├── src/
│   ├── app/                        # Next.js App Router (frontend)
│   │   ├── (website)/              # Public pages
│   │   │   ├── page.tsx            #   Landing page (/)
│   │   │   ├── contact/page.tsx    #   Contact page (/contact)
│   │   │   ├── login/page.tsx      #   Login page (/login)
│   │   │   └── signup/page.tsx     #   Signup page (/signup)
│   │   ├── (user)/                 # Authenticated user area
│   │   │   ├── layout.tsx          #   Sidebar layout (auth-protected)
│   │   │   └── dashboard/
│   │   │       ├── page.tsx        #   Dashboard (/dashboard)
│   │   │       ├── profile/page.tsx    # Profile (/dashboard/profile)
│   │   │       └── settings/page.tsx   # Settings (/dashboard/settings)
│   │   ├── (admin)/                # Admin area
│   │   │   ├── layout.tsx          #   Sidebar layout (admin role-protected)
│   │   │   └── admin/
│   │   │       ├── page.tsx        #   Admin overview (/admin)
│   │   │       ├── users/page.tsx  #   User management (/admin/users)
│   │   │       └── settings/page.tsx   # Admin settings (/admin/settings)
│   │   ├── auth/callback/route.ts  # OAuth callback handler
│   │   ├── layout.tsx              # Root layout
│   │   └── globals.css             # Global styles
│   ├── backend/                    # Server-side logic
│   │   └── database/
│   │       ├── supabase/           # Supabase clients
│   │       │   ├── client.ts       #   Browser client
│   │       │   ├── server.ts       #   Server client
│   │       │   └── middleware.ts   #   Session refresh + route guards
│   │       ├── auth.ts             # Server actions: login, signup, signout
│   │       └── index.ts            # DB query helpers
│   ├── ai-service/                 # AI service integration (placeholder)
│   │   └── index.ts
│   └── middleware.ts               # Next.js middleware entry
├── tests/                          # All tests
│   ├── integration/                # Integration tests
│   │   ├── auth/                   #   Auth flow tests
│   │   ├── api/                    #   API endpoint tests
│   │   └── database/               #   DB query & RLS tests
│   ├── e2e/                        # End-to-end tests
│   ├── unit/                       # Unit tests
│   └── setup.ts                    # Shared test utilities
├── .github/
│   ├── copilot-instructions.md     # AI coding instructions
│   └── workflows/
│       ├── ci.yml                  # Build + lint + test on push/PR
│       └── validate-pr.yml        # Type check + lint + build + test on PR
└── .env.local                      # Single global env file (root only)
```

### Route Groups

The `(website)`, `(user)`, and `(admin)` folders are **Next.js route groups**. The parentheses are not part of the URL:

| Route Group | URL Prefix | Purpose |
|-------------|-----------|---------|
| `(website)` | `/` | Public pages — landing, contact, login, signup |
| `(user)` | `/dashboard` | Authenticated user area — dashboard, profile, settings |
| `(admin)` | `/admin` | Admin area — overview, user management, admin settings |

## Quick Start

```bash
# 1. Clone this template
git clone <your-repo-url>
cd hackathon-template

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your Supabase URL and anon key

# 4. Run the dev server
npm run dev
```

## Environment Variables

There is a **single `.env.local`** at the project root. No nested env files anywhere.

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## Database Schema

The `profiles` table is auto-created on user signup. To promote a user to admin:

```sql
UPDATE profiles SET role = 'admin' WHERE email = 'your@email.com';
```

## Testing

```bash
npm test                  # Run all tests
npm run test:integration  # Integration tests only
npm run test:e2e          # E2E tests only
npm run test:coverage     # With coverage
```

- **Unit tests** → `tests/unit/`
- **Integration tests** → `tests/integration/` (auth, api, database subdirs)
- **E2E tests** → `tests/e2e/`

## Extending

- Add public pages in `src/app/(website)/`
- Add user pages in `src/app/(user)/dashboard/`
- Add admin pages in `src/app/(admin)/admin/`
- Add API routes in `src/app/api/`
- Add DB queries in `src/backend/database/index.ts`
- Add tests in `tests/` (matching the test type)

## CI/CD

GitHub Actions workflows run automatically:

- **ci.yml** — Runs on push to `main` and PRs: build, lint, tests
- **validate-pr.yml** — Runs on PRs: type check, lint, build, tests

Add your Supabase secrets to GitHub repo settings → Secrets:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Deploy

```bash
# Vercel (recommended)
npx vercel

# Or build and run
npm run build && npm start
```
