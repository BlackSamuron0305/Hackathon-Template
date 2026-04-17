const metrics = [
  { label: "Weekly sessions", value: "128", note: "+14%" },
  { label: "Tasks shipped", value: "42", note: "+8" },
  { label: "Feedback score", value: "4.8", note: "Stable" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="glass rounded-3xl p-8">
        <h1 className="text-3xl font-semibold">User Dashboard</h1>
        <p className="mt-2 text-foreground/75">Track momentum, product quality, and next actions in one place.</p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {metrics.map((metric) => (
          <article key={metric.label} className="glass rounded-2xl p-5">
            <p className="text-sm text-foreground/70">{metric.label}</p>
            <p className="mt-2 text-3xl font-semibold">{metric.value}</p>
            <p className="mt-2 text-xs text-cyan-200">{metric.note}</p>
          </article>
        ))}
      </section>

      <section className="glass rounded-2xl p-6">
        <h2 className="text-lg font-semibold">Roadmap Focus</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground/80">
          <li>Connect these cards to real Supabase analytics.</li>
          <li>Add project-specific team widgets and goals.</li>
          <li>Ship role-aware notifications for admins and users.</li>
        </ul>
      </section>
    </div>
  );
}
