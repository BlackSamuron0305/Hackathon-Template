export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      <section className="glass rounded-3xl p-8">
        <h1 className="text-3xl font-semibold">Admin Settings</h1>
        <p className="mt-2 text-foreground/75">Global policy controls, release safety toggles, and system governance.</p>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="glass rounded-2xl p-6">
          <h2 className="font-semibold">Platform policies</h2>
          <p className="mt-2 text-sm text-foreground/75">Control feature flags and cross-environment rollout strategy.</p>
          <div className="mt-4 rounded-xl border border-dashed border-white/20 p-4 text-sm text-foreground/60">Connect to policy storage.</div>
        </article>

        <article className="glass rounded-2xl p-6">
          <h2 className="font-semibold">Security posture</h2>
          <p className="mt-2 text-sm text-foreground/75">Set stricter auth, rotation, and alerting defaults.</p>
          <div className="mt-4 rounded-xl border border-dashed border-white/20 p-4 text-sm text-foreground/60">Connect to security config.</div>
        </article>
      </section>
    </div>
  );
}
