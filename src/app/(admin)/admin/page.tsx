export default function AdminOverviewPage() {
    return (
        <div className="px-8 py-10">
            <div className="mb-8">
                <h1 className="text-2xl font-bold">Admin Overview</h1>
                <p className="mt-1 text-foreground/60">
                    Manage users and application settings.
                </p>
            </div>

            {/* Admin stats */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl border border-foreground/10 p-6">
                    <h3 className="text-sm font-medium text-foreground/60">Total Users</h3>
                    <p className="mt-2 text-3xl font-bold">--</p>
                </div>
                <div className="rounded-xl border border-foreground/10 p-6">
                    <h3 className="text-sm font-medium text-foreground/60">Active Today</h3>
                    <p className="mt-2 text-3xl font-bold">--</p>
                </div>
                <div className="rounded-xl border border-foreground/10 p-6">
                    <h3 className="text-sm font-medium text-foreground/60">Metric 3</h3>
                    <p className="mt-2 text-3xl font-bold">--</p>
                </div>
                <div className="rounded-xl border border-foreground/10 p-6">
                    <h3 className="text-sm font-medium text-foreground/60">Metric 4</h3>
                    <p className="mt-2 text-3xl font-bold">--</p>
                </div>
            </div>

            {/* Quick actions */}
            <div className="mt-10 rounded-xl border border-dashed border-foreground/20 p-12 text-center">
                <p className="text-foreground/40">
                    Admin overview content goes here.
                </p>
            </div>
        </div>
    );
}
