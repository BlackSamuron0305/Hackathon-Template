import { login } from "@/backend/database/auth";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; message?: string }>;
}) {
  const params = await searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md space-y-8 rounded-xl border border-foreground/10 bg-background p-8 shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
          <p className="mt-2 text-sm text-foreground/60">
            Sign in to your account
          </p>
        </div>

        {params.error && (
          <div className="rounded-lg bg-red-500/10 p-3 text-center text-sm text-red-500">
            {params.error}
          </div>
        )}

        {params.message && (
          <div className="rounded-lg bg-green-500/10 p-3 text-center text-sm text-green-500">
            {params.message}
          </div>
        )}

        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-lg border border-foreground/20 bg-background px-4 py-2.5 text-sm outline-none focus:border-foreground/50 focus:ring-1 focus:ring-foreground/50"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 w-full rounded-lg border border-foreground/20 bg-background px-4 py-2.5 text-sm outline-none focus:border-foreground/50 focus:ring-1 focus:ring-foreground/50"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            formAction={login}
            className="w-full rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Sign in
          </button>
        </form>

        <p className="text-center text-sm text-foreground/60">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="font-medium text-foreground underline underline-offset-4">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
