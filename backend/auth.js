import { supabase } from "./supabaseClient";

// Sign up a new user with email and password.
export async function signUp(email, password) {
  const { user, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;
  return user;
}

// Sign in an existing user.
export async function signIn(email, password) {
  const { user, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return user;
}

// Sign out the current user.
export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

// Get current session.
export function getSession() {
  return supabase.auth.getSession();
}
