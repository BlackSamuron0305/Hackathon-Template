export default function DashboardPage() {
    return (
        <div className="px-8 py-10">
            <div className="mb-8">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <p className="mt-1 text-foreground/60">
                    Here&apos;s what&apos;s happening with your account.
                </p>
            </div>

            {/* Stats grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-xl border border-foreground/10 p-6">
                    <h3 className="text-sm font-medium text-foreground/60">Card 1</h3>
                    <p className="mt-2 text-3xl font-bold">--</p>
                </div>
                <div className="rounded-xl border border-foreground/10 p-6">
                    <h3 className="text-sm font-medium text-foreground/60">Card 2</h3>
                    <p className="mt-2 text-3xl font-bold">--</p>
                </div>
                <div className="rounded-xl border border-foreground/10 p-6">
                    <h3 className="text-sm font-medium text-foreground/60">Card 3</h3>
                    <p className="mt-2 text-3xl font-bold">--</p>
                </div>
            </div>

            {/* Content area */}
            <div className="mt-10 rounded-xl border border-dashed border-foreground/20 p-12 text-center">
                <p className="text-foreground/40">
                    Your dashboard content goes here. Start building!
                </p>
            </div>
        </div>
    );
}
