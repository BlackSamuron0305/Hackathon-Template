import { createClient } from "@/backend/database/supabase/server";

export default async function ProfilePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="space-y-6">
      <section className="glass rounded-3xl p-8">
        <h1 className="text-3xl font-semibold">Profile</h1>
        <p className="mt-2 text-foreground/75">Core account identity and audit-safe metadata snapshot.</p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="glass rounded-2xl p-5">
          <p className="text-sm text-foreground/70">Email</p>
          <p className="mt-2 break-all text-sm font-medium">{user?.email ?? "Unknown"}</p>
        </article>
        <article className="glass rounded-2xl p-5">
          <p className="text-sm text-foreground/70">User ID</p>
          <p className="mt-2 break-all font-mono text-xs text-foreground/75">{user?.id ?? "Unknown"}</p>
        </article>
      </section>
    </div>
  );
}
