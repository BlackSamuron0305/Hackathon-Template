import Link from "next/link";
import { createClient } from "@/backend/database/supabase/server";
import { redirect } from "next/navigation";
import { signout } from "@/backend/database/auth";

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r border-foreground/10 bg-foreground/[0.02]">
        <div className="flex h-full flex-col px-4 py-6">
          <Link href="/" className="mb-8 px-2 text-lg font-bold">
            🚀 HackApp
          </Link>

          <nav className="flex flex-1 flex-col gap-1">
            <Link
              href="/dashboard"
              className="rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-foreground/5"
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard/profile"
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/60 transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              Profile
            </Link>
            <Link
              href="/dashboard/settings"
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/60 transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              Settings
            </Link>
          </nav>

          <div className="border-t border-foreground/10 pt-4">
            <div className="mb-2 truncate px-3 text-xs text-foreground/40">
              {user.email}
            </div>
            <form>
              <button
                formAction={signout}
                className="w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-foreground/60 transition-colors hover:bg-foreground/5 hover:text-foreground"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
