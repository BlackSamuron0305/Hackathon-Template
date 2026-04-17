export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <section className="glass rounded-3xl p-8">
        <h1 className="text-3xl font-semibold">Settings</h1>
        <p className="mt-2 text-foreground/75">Choose workspace behavior and account safeguards.</p>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="glass rounded-2xl p-6">
          <h2 className="font-semibold">Notifications</h2>
          <p className="mt-2 text-sm text-foreground/75">Enable product, build, and system digest updates.</p>
          <div className="mt-4 rounded-xl border border-dashed border-white/20 p-4 text-sm text-foreground/60">Hook this section to user preference storage.</div>
        </article>

        <article className="glass rounded-2xl p-6">
          <h2 className="font-semibold">Appearance</h2>
          <p className="mt-2 text-sm text-foreground/75">Reserved for theme packs and team branding kits.</p>
          <div className="mt-4 rounded-xl border border-dashed border-white/20 p-4 text-sm text-foreground/60">Add user-selectable themes and typography controls.</div>
        </article>
      </section>
    </div>
  );
}
