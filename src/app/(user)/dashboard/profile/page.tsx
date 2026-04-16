import { createClient } from "@/backend/database/supabase/server";

export default async function ProfilePage() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    return (
        <div className="px-8 py-10">
            <div className="mb-8">
                <h1 className="text-2xl font-bold">Profile</h1>
                <p className="mt-1 text-foreground/60">
                    Manage your account information.
                </p>
            </div>

            <div className="max-w-lg space-y-6">
                <div className="rounded-xl border border-foreground/10 p-6">
                    <h3 className="text-sm font-medium text-foreground/60">Email</h3>
                    <p className="mt-1 text-sm">{user?.email}</p>
                </div>

                <div className="rounded-xl border border-foreground/10 p-6">
                    <h3 className="text-sm font-medium text-foreground/60">User ID</h3>
                    <p className="mt-1 font-mono text-xs text-foreground/40">{user?.id}</p>
                </div>

                <div className="rounded-xl border border-dashed border-foreground/20 p-6 text-center">
                    <p className="text-sm text-foreground/40">
                        Add profile fields here (name, avatar, bio, etc.)
                    </p>
                </div>
            </div>
        </div>
    );
}
