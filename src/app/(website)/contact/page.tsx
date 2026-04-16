import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Nav */}
      <header className="border-b border-foreground/10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold">
            🚀 HackApp
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <Link
              href="/login"
              className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              Sign in
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight">Contact Us</h1>
        <p className="mt-4 text-foreground/60">
          Have questions? Reach out and we&apos;ll get back to you.
        </p>

        <form className="mt-10 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 w-full rounded-lg border border-foreground/20 bg-background px-4 py-2.5 text-sm outline-none focus:border-foreground/50 focus:ring-1 focus:ring-foreground/50"
              placeholder="Your name"
            />
          </div>
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
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-1 w-full rounded-lg border border-foreground/20 bg-background px-4 py-2.5 text-sm outline-none focus:border-foreground/50 focus:ring-1 focus:ring-foreground/50"
              placeholder="How can we help?"
            />
          </div>
          <button
            type="submit"
            className="rounded-lg bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Send Message
          </button>
        </form>
      </main>

      <footer className="border-t border-foreground/10 px-6 py-6 text-center text-sm text-foreground/40">
        Built for hackathons with ❤️
      </footer>
    </div>
  );
}
