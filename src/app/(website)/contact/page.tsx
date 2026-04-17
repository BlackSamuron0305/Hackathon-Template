import { submitContactForm } from "@/backend/contact";
import Link from "next/link";

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; message?: string }>;
}) {
  const params = await searchParams;

  return (
    <div className="mx-auto min-h-screen w-full max-w-3xl px-6 py-10">
      <header className="glass flex items-center justify-between rounded-2xl px-5 py-4">
        <Link href="/" className="text-lg font-semibold">✨ Hackathon Forge</Link>
        <Link href="/login" className="rounded-lg border border-white/15 px-3 py-2 text-sm text-foreground/80 hover:bg-white/5">Sign in</Link>
      </header>

      <main className="glass mt-8 rounded-3xl p-8 sm:p-10">
        <h1 className="text-3xl font-semibold">Contact the team</h1>
        <p className="mt-3 text-foreground/75">
          Share your project idea, collaboration needs, or deployment blockers.
        </p>

        {params.error && <p className="mt-4 rounded-xl border border-red-400/30 bg-red-400/10 px-3 py-2 text-sm text-red-200">{params.error}</p>}
        {params.message && <p className="mt-4 rounded-xl border border-green-400/30 bg-green-400/10 px-3 py-2 text-sm text-green-200">{params.message}</p>}

        <form className="mt-8 grid gap-5">
          <label htmlFor="name" className="grid gap-2 text-sm">
            Name
            <input id="name" name="name" className="rounded-xl border bg-transparent px-4 py-3 outline-none ring-violet-400/0 transition focus:ring-2 focus:ring-violet-400" placeholder="Your name" required />
          </label>
          <label htmlFor="email" className="grid gap-2 text-sm">
            Email
            <input id="email" name="email" type="email" className="rounded-xl border bg-transparent px-4 py-3 outline-none ring-violet-400/0 transition focus:ring-2 focus:ring-violet-400" placeholder="you@example.com" required />
          </label>
          <label htmlFor="message" className="grid gap-2 text-sm">
            Message
            <textarea id="message" name="message" rows={5} className="rounded-xl border bg-transparent px-4 py-3 outline-none ring-violet-400/0 transition focus:ring-2 focus:ring-violet-400" placeholder="How can we help?" required />
          </label>
          <button formAction={submitContactForm} className="rounded-xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-400">
            Send message
          </button>
        </form>
      </main>
    </div>
  );
}
