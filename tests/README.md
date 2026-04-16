# Tests

This directory contains all tests for the Hackathon Template project.

## Structure

```
tests/
├── integration/        # Integration tests (API routes, DB, auth flows)
│   ├── auth/           # Authentication flow tests
│   ├── api/            # API endpoint tests
│   └── database/       # Database query & RLS tests
├── e2e/                # End-to-end tests (full user journeys)
├── unit/               # Unit tests (pure functions, helpers)
└── setup.ts            # Shared test setup & utilities
```

## Running Tests

```bash
# Run all tests
npm test

# Run integration tests only
npm run test:integration

# Run e2e tests only
npm run test:e2e

# Run with coverage
npm run test:coverage
```

## Writing Tests

- **Unit tests** go in `tests/unit/` — test pure functions and utilities
- **Integration tests** go in `tests/integration/` — test API routes, database queries, auth flows
- **E2E tests** go in `tests/e2e/` — test full user journeys through the app

Name test files with the `.test.ts` or `.test.tsx` suffix.
