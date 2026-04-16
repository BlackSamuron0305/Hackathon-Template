import { createClient } from "@/backend/database/supabase/server";

/**
 * Database query helpers.
 *
 * Centralizes all Supabase DB queries so frontend pages
 * don't call supabase directly — they call these functions instead.
 *
 * Add your table queries here as your schema grows.
 */

// ── Profiles ──────────────────────────────────────────────

export async function getProfile(userId: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  return { data, error };
}

export async function getAllProfiles() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .order("created_at", { ascending: false });

  return { data, error };
}

export async function updateProfileRole(userId: string, role: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("profiles")
    .update({ role })
    .eq("id", userId)
    .select()
    .single();

  return { data, error };
}
