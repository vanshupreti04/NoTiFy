import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,   // ✅ Keeps users logged in after page refresh
    autoRefreshToken: true, // ✅ Automatically refreshes authentication tokens
    detectSessionInUrl: true, // ✅ Required for OAuth logins (GitHub, Google, etc.)
  }
});
