export default function AdminUsersPage() {
  return (
    <div className="px-8 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Users</h1>
        <p className="mt-1 text-foreground/60">
          View and manage all registered users.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-foreground/10">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-foreground/10 bg-foreground/5">
            <tr>
              <th className="px-6 py-3 font-medium">Email</th>
              <th className="px-6 py-3 font-medium">Role</th>
              <th className="px-6 py-3 font-medium">Created</th>
              <th className="px-6 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-foreground/5">
              <td className="px-6 py-4 text-foreground/40" colSpan={4}>
                Load users from your profiles table here.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
