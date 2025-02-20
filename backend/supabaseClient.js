import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Minimal IndexedDB helper (stub implementation)
export async function saveToIndexedDB(key, data) {
  // ...existing code or use a library like idb...
  console.log(`Saving ${key} to IndexedDB`, data);
}
