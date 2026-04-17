# Tests

This directory contains all tests for the Hackathon Template project.

## Structure

```
tests/
├── integration/        # Integration tests (API routes, DB, auth flows)
│   ├── auth/
│   ├── api/
│   └── database/
├── e2e/                # End-to-end tests
├── unit/               # Unit tests
└── setup.ts            # Shared test setup & utilities
```

## Running Tests

```bash
# Run all tests
npm test

# Alias: run tests only
npm run test:only

# CI style validation
npm run test:ci
```

## Writing Tests

- **Unit tests** go in `tests/unit/`.
- **Integration tests** go in `tests/integration/`.
- **E2E tests** go in `tests/e2e/`.

Name test files with the `.test.mjs`, `.test.ts`, or `.test.tsx` suffix.
