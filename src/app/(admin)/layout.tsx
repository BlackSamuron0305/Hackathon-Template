import Link from "next/link";
import { createClient } from "@/backend/database/supabase/server";
import { redirect } from "next/navigation";
import { signout } from "@/backend/database/auth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Check admin role
  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (profile?.role !== "admin") {
    redirect("/dashboard");
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r border-foreground/10 bg-foreground/[0.02]">
        <div className="flex h-full flex-col px-4 py-6">
          <div className="mb-8 flex items-center gap-2 px-2">
            <Link href="/" className="text-lg font-bold">
              🚀 HackApp
            </Link>
            <span className="rounded-full bg-red-500/10 px-2 py-0.5 text-[10px] font-medium text-red-500">
              Admin
            </span>
          </div>

          <nav className="flex flex-1 flex-col gap-1">
            <Link
              href="/admin"
              className="rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-foreground/5"
            >
              Overview
            </Link>
            <Link
              href="/admin/users"
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/60 transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              Users
            </Link>
            <Link
              href="/admin/settings"
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/60 transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              Settings
            </Link>
          </nav>

          <div className="border-t border-foreground/10 pt-4">
            <Link
              href="/dashboard"
              className="mb-2 block rounded-lg px-3 py-2 text-sm font-medium text-foreground/60 transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              ← Back to User Dashboard
            </Link>
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
