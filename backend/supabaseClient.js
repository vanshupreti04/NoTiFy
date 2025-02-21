import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  persistence: 'local',
  schema: 'api'  // Set schema to "api" per allowed schemas
});

// Improved IndexedDB helper with a localStorage fallback.
export async function saveToIndexedDB(key, data) {
  try {
    if ("indexedDB" in window) {
      // Here you could integrate a proper IndexedDB library like idb
      console.log(`Saving ${key} to IndexedDB (stub implementation).`, data);
      // ...existing code or library call...
    } else {
      // Fallback to localStorage if IndexedDB is unavailable
      localStorage.setItem(key, JSON.stringify(data));
      console.log(`Saving ${key} to localStorage as fallback.`, data);
    }
  } catch (err) {
    console.error("saveToIndexedDB error:", err);
  }
}
