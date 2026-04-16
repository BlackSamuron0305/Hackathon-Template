import Link from "next/link";
import { createClient } from "@/backend/database/supabase/server";

export default async function HomePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <div className="flex min-h-screen flex-col">
      {/* Nav */}
      <header className="border-b border-foreground/10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold">
            🚀 HackApp
          </Link>
          <div className="flex items-center gap-4">
            {user ? (
              <Link
                href="/dashboard"
                className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
                >
                  Sign in
                </Link>
                <Link
                  href="/signup"
                  className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>

      {/* Hero */}
      <main className="flex flex-1 items-center justify-center px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Build something{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              amazing
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/60">
            Your hackathon project starts here. Authentication, database, and
            infrastructure — all ready to go. Focus on what makes your idea
            unique.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href="/signup"
              className="rounded-lg bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-sm transition-opacity hover:opacity-90"
            >
              Get Started
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-foreground/20 px-6 py-3 text-sm font-semibold transition-colors hover:bg-foreground/5"
            >
              GitHub →
            </a>
          </div>
        </div>
      </main>

      {/* Features */}
      <section className="border-t border-foreground/10 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl">
              🔐
            </div>
            <h3 className="mt-4 font-semibold">Authentication</h3>
            <p className="mt-2 text-sm text-foreground/60">
              Login, signup, and session management with Supabase Auth. Role-based access built in.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-2xl">
              🗄️
            </div>
            <h3 className="mt-4 font-semibold">Database</h3>
            <p className="mt-2 text-sm text-foreground/60">
              Postgres database with Row Level Security. Profiles table ready to extend.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-2xl">
              ⚡
            </div>
            <h3 className="mt-4 font-semibold">Fast Setup</h3>
            <p className="mt-2 text-sm text-foreground/60">
              Next.js App Router, Tailwind CSS, TypeScript. Deploy-ready in minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-foreground/10 px-6 py-6 text-center text-sm text-foreground/40">
        Built for hackathons with ❤️
      </footer>
    </div>
  );
}
