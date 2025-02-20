import { supabase } from "./supabaseClient";
import { saveData, loadData } from "./indexedDBHelper";

// Sync data to Supabase and IndexedDB simultaneously.
export async function syncData(table, key, data) {
  const { error } = await supabase.from(table).upsert({ id: key, data });
  if (error) console.error("Supabase sync error:", error);
  await saveData(key, data);
}

// Load data from IndexedDB for offline persistence / caching.
export async function loadSyncedData(key) {
  return await loadData(key);
}
