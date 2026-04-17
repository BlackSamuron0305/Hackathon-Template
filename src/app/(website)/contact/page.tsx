import Link from "next/link";

export default function ContactPage() {
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

        <form className="mt-8 grid gap-5">
          <label className="grid gap-2 text-sm">
            Name
            <input className="rounded-xl border bg-transparent px-4 py-3 outline-none ring-violet-400/0 transition focus:ring-2" placeholder="Your name" required />
          </label>
          <label className="grid gap-2 text-sm">
            Email
            <input type="email" className="rounded-xl border bg-transparent px-4 py-3 outline-none ring-violet-400/0 transition focus:ring-2" placeholder="you@example.com" required />
          </label>
          <label className="grid gap-2 text-sm">
            Message
            <textarea rows={5} className="rounded-xl border bg-transparent px-4 py-3 outline-none ring-violet-400/0 transition focus:ring-2" placeholder="How can we help?" required />
          </label>
          <button type="submit" className="rounded-xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-400">
            Send message
          </button>
        </form>
      </main>
    </div>
  );
}
