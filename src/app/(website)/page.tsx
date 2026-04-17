import Link from "next/link";
import { createClient } from "@/backend/database/supabase/server";

const highlights = [
  {
    title: "Command Center UX",
    desc: "A premium, futuristic UI baseline for website, user, and admin experiences.",
    emoji: "🛰️",
  },
  {
    title: "Role-first Routing",
    desc: "Public, user, and admin sub-pages with distinct layout personality and clear hierarchy.",
    emoji: "🧭",
  },
  {
    title: "Deploy-ready",
    desc: "Docker + quick Windows scripts for build, test, and deployment workflows.",
    emoji: "🚢",
  },
];

export default async function HomePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen px-6 py-8 sm:px-10 lg:px-16">
      <header className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-4">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          ✨ Hackathon Forge
        </Link>
        <nav className="flex items-center gap-3 text-sm">
          <Link href="/contact" className="rounded-lg px-3 py-2 text-foreground/75 hover:bg-white/5 hover:text-foreground">
            Contact
          </Link>
          {user ? (
            <Link href="/dashboard" className="rounded-lg bg-violet-500 px-4 py-2 font-medium text-white hover:bg-violet-400">
              Dashboard
            </Link>
          ) : (
            <>
              <Link href="/login" className="rounded-lg px-3 py-2 text-foreground/75 hover:bg-white/5 hover:text-foreground">
                Login
              </Link>
              <Link href="/signup" className="rounded-lg bg-cyan-500 px-4 py-2 font-medium text-slate-950 hover:bg-cyan-400">
                Get Started
              </Link>
            </>
          )}
        </nav>
      </header>

      <main className="mx-auto mt-10 grid max-w-6xl gap-8 lg:grid-cols-[1.3fr_1fr]">
        <section className="glass rounded-3xl p-8 sm:p-10">
          <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-medium tracking-wide text-cyan-200">
            Initial Product Frontend
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
            Design faster.
            <br />
            Ship smarter.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-foreground/75 sm:text-lg">
            This starter now ships with a cohesive multi-page interface across website, user, and admin areas so you can focus on building differentiating features.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/signup" className="rounded-xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-400">
              Start Building
            </Link>
            <Link href="/admin" className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-foreground/85 hover:bg-white/5">
              View Admin Space
            </Link>
          </div>
        </section>

        <section className="glass rounded-3xl p-8">
          <h2 className="text-xl font-semibold">Stack Decisions</h2>
          <ul className="mt-4 space-y-3 text-sm text-foreground/80">
            <li className="rounded-xl border border-white/10 bg-white/5 p-3">
              <strong className="text-white">Design System:</strong> Tailwind + shadcn-style primitives and spacing rhythm.
            </li>
            <li className="rounded-xl border border-white/10 bg-white/5 p-3">
              <strong className="text-white">Routing:</strong> Next.js route-grouped experiences for public/user/admin.
            </li>
            <li className="rounded-xl border border-white/10 bg-white/5 p-3">
              <strong className="text-white">Deployment:</strong> Docker Compose plus Windows quick deployment scripts.
            </li>
          </ul>
        </section>
      </main>

      <section className="mx-auto mt-8 grid max-w-6xl gap-4 sm:grid-cols-3">
        {highlights.map((item) => (
          <article key={item.title} className="glass rounded-2xl p-5">
            <div className="text-2xl">{item.emoji}</div>
            <h3 className="mt-3 font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-foreground/70">{item.desc}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
