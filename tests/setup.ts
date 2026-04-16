/**
 * Shared test setup and utilities.
 * Import this in test files that need common configuration.
 *
 * Environment variables are loaded from the root .env.local by your test runner.
 * For example, with Vitest: define `envDir: '.'` in vitest.config.ts.
 */

/**
 * Helper to get the Supabase URL from environment.
 */
export function getTestSupabaseUrl(): string {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    if (!url) throw new Error('NEXT_PUBLIC_SUPABASE_URL not set')
    return url
}

/**
 * Helper to get the Supabase anon key from environment.
 */
export function getTestSupabaseAnonKey(): string {
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    if (!key) throw new Error('NEXT_PUBLIC_SUPABASE_ANON_KEY not set')
    return key
}
