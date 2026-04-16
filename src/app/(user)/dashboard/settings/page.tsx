export default function SettingsPage() {
  return (
    <div className="px-8 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="mt-1 text-foreground/60">
          Configure your account preferences.
        </p>
      </div>

      <div className="max-w-lg space-y-6">
        <div className="rounded-xl border border-foreground/10 p-6">
          <h3 className="font-medium">Notifications</h3>
          <p className="mt-1 text-sm text-foreground/60">
            Manage your notification preferences.
          </p>
          <div className="mt-4 rounded-lg border border-dashed border-foreground/20 p-4 text-center text-sm text-foreground/40">
            Notification settings placeholder
          </div>
        </div>

        <div className="rounded-xl border border-foreground/10 p-6">
          <h3 className="font-medium">Appearance</h3>
          <p className="mt-1 text-sm text-foreground/60">
            Customize the look and feel.
          </p>
          <div className="mt-4 rounded-lg border border-dashed border-foreground/20 p-4 text-center text-sm text-foreground/40">
            Theme settings placeholder
          </div>
        </div>

        <div className="rounded-xl border border-red-500/20 p-6">
          <h3 className="font-medium text-red-500">Danger Zone</h3>
          <p className="mt-1 text-sm text-foreground/60">
            Irreversible actions for your account.
          </p>
          <button className="mt-4 rounded-lg border border-red-500/30 px-4 py-2 text-sm font-medium text-red-500 transition-colors hover:bg-red-500/5">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
