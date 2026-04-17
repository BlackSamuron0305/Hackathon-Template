const sampleUsers = [
  { email: "alex@forge.app", role: "admin", created: "2026-03-01" },
  { email: "sam@forge.app", role: "user", created: "2026-03-06" },
  { email: "mila@forge.app", role: "user", created: "2026-03-10" },
];

export default function AdminUsersPage() {
  return (
    <div className="space-y-6">
      <section className="glass rounded-3xl p-8">
        <h1 className="text-3xl font-semibold">Users</h1>
        <p className="mt-2 text-foreground/75">Sample management table ready to wire to real profile queries.</p>
      </section>

      <section className="glass overflow-hidden rounded-2xl">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/5 text-foreground/85">
            <tr>
              <th className="px-5 py-3 font-medium">Email</th>
              <th className="px-5 py-3 font-medium">Role</th>
              <th className="px-5 py-3 font-medium">Created</th>
              <th className="px-5 py-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {sampleUsers.map((user) => (
              <tr key={user.email} className="border-t border-white/10">
                <td className="px-5 py-3">{user.email}</td>
                <td className="px-5 py-3 text-foreground/80">{user.role}</td>
                <td className="px-5 py-3 text-foreground/70">{user.created}</td>
                <td className="px-5 py-3">
                  <button aria-label={`Inspect user ${user.email}`} className="rounded-lg border border-white/20 px-3 py-1.5 text-xs hover:bg-white/5">Inspect</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
