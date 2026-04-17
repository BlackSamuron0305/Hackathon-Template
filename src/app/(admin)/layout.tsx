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
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

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
      <aside className="glass m-4 hidden w-72 flex-col rounded-2xl p-4 md:flex">
        <div className="flex items-center justify-between rounded-xl px-3 py-2">
          <Link href="/" className="text-lg font-semibold">✨ Hackathon Forge</Link>
          <span className="rounded-full bg-rose-400/20 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-rose-200">Admin</span>
        </div>
        <nav className="mt-4 grid gap-1 text-sm">
          <Link href="/admin" className="rounded-lg px-3 py-2 hover:bg-white/5">Overview</Link>
          <Link href="/admin/users" className="rounded-lg px-3 py-2 text-foreground/75 hover:bg-white/5 hover:text-foreground">Users</Link>
          <Link href="/admin/settings" className="rounded-lg px-3 py-2 text-foreground/75 hover:bg-white/5 hover:text-foreground">Settings</Link>
          <Link href="/dashboard" className="mt-2 rounded-lg border border-white/15 px-3 py-2 text-foreground/75 hover:bg-white/5 hover:text-foreground">Back to user area</Link>
        </nav>
        <div className="mt-auto border-t border-white/15 pt-4">
          <p className="truncate px-3 text-xs text-foreground/55">{user.email}</p>
          <form className="mt-2">
            <button formAction={signout} className="w-full rounded-lg px-3 py-2 text-left text-sm text-foreground/75 hover:bg-white/5 hover:text-foreground">
              Sign out
            </button>
          </form>
        </div>
      </aside>
      <main className="flex-1 p-4 md:pl-0">{children}</main>
    </div>
  );
}
