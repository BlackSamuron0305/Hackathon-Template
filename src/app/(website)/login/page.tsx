import Link from "next/link";
import { login } from "@/backend/database/auth";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; message?: string }>;
}) {
  const params = await searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-10">
      <div className="glass w-full max-w-md rounded-3xl p-8">
        <p className="text-sm text-cyan-200">Welcome back</p>
        <h1 className="mt-2 text-3xl font-semibold">Sign in</h1>

        {params.error && <p className="mt-4 rounded-xl border border-red-400/30 bg-red-400/10 px-3 py-2 text-sm text-red-200">{params.error}</p>}
        {params.message && <p className="mt-4 rounded-xl border border-green-400/30 bg-green-400/10 px-3 py-2 text-sm text-green-200">{params.message}</p>}

        <form className="mt-6 grid gap-4">
          <label htmlFor="email" className="grid gap-2 text-sm">
            Email
            <input id="email" name="email" type="email" className="rounded-xl border bg-transparent px-4 py-3 outline-none ring-violet-400/0 transition focus:ring-2 focus:ring-violet-400" required placeholder="you@example.com" />
          </label>
          <label htmlFor="password" className="grid gap-2 text-sm">
            Password
            <input id="password" name="password" type="password" className="rounded-xl border bg-transparent px-4 py-3 outline-none ring-violet-400/0 transition focus:ring-2 focus:ring-violet-400" required placeholder="••••••••" />
          </label>
          <button formAction={login} className="mt-2 rounded-xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-400">
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-foreground/75">
          Need an account? <Link href="/signup" className="font-semibold text-cyan-300 hover:text-cyan-200">Create one</Link>
        </p>
      </div>
    </div>
  );
}
