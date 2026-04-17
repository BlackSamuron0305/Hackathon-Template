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
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen">
      <aside className="glass m-4 hidden w-72 flex-col rounded-2xl p-4 md:flex">
        <Link href="/" className="rounded-xl px-3 py-2 text-lg font-semibold hover:bg-white/5">
          ✨ Hackathon Forge
        </Link>
        <nav className="mt-4 grid gap-1 text-sm">
          <Link href="/dashboard" className="rounded-lg px-3 py-2 hover:bg-white/5">Dashboard</Link>
          <Link href="/dashboard/profile" className="rounded-lg px-3 py-2 text-foreground/75 hover:bg-white/5 hover:text-foreground">Profile</Link>
          <Link href="/dashboard/settings" className="rounded-lg px-3 py-2 text-foreground/75 hover:bg-white/5 hover:text-foreground">Settings</Link>
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
