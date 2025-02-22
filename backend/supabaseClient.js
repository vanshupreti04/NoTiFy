import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,   // ✅ Keeps users logged in after page refresh
    autoRefreshToken: true, // ✅ Automatically refreshes authentication tokens
    detectSessionInUrl: true, // ✅ Required for OAuth logins (GitHub, Google, etc.)
  },
  db: {
    schema: "api", // 🔥 Explicitly setting to "api" schema as per your setup
  },
});
