export default function AdminSettingsPage() {
  return (
    <div className="px-8 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Admin Settings</h1>
        <p className="mt-1 text-foreground/60">
          Configure application-wide settings.
        </p>
      </div>

      <div className="max-w-lg space-y-6">
        <div className="rounded-xl border border-foreground/10 p-6">
          <h3 className="font-medium">General</h3>
          <p className="mt-1 text-sm text-foreground/60">
            App name, description, and other general settings.
          </p>
          <div className="mt-4 rounded-lg border border-dashed border-foreground/20 p-4 text-center text-sm text-foreground/40">
            General settings placeholder
          </div>
        </div>

        <div className="rounded-xl border border-foreground/10 p-6">
          <h3 className="font-medium">Security</h3>
          <p className="mt-1 text-sm text-foreground/60">
            Authentication and access control settings.
          </p>
          <div className="mt-4 rounded-lg border border-dashed border-foreground/20 p-4 text-center text-sm text-foreground/40">
            Security settings placeholder
          </div>
        </div>
      </div>
    </div>
  );
}
