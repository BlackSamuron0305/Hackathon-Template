const adminStats = [
  { label: "Total users", value: "1,245" },
  { label: "Active teams", value: "84" },
  { label: "API requests", value: "2.4M" },
  { label: "Critical alerts", value: "0" },
];

export default function AdminOverviewPage() {
  return (
    <div className="space-y-6">
      <section className="glass rounded-3xl p-8">
        <h1 className="text-3xl font-semibold">Admin Overview</h1>
        <p className="mt-2 text-foreground/75">Govern growth, quality, and security from one command center.</p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {adminStats.map((metric) => (
          <article key={metric.label} className="glass rounded-2xl p-5">
            <p className="text-sm text-foreground/70">{metric.label}</p>
            <p className="mt-2 text-3xl font-semibold">{metric.value}</p>
          </article>
        ))}
      </section>

      <section className="glass rounded-2xl p-6">
        <h2 className="text-lg font-semibold">Operational checklist</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground/80">
          <li>Audit permissions and role assignments weekly.</li>
          <li>Track deployment health and rollback readiness.</li>
          <li>Review anomaly logs from backend and AI services.</li>
        </ul>
      </section>
    </div>
  );
}
