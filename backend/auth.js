import { supabase } from "./supabaseClient";

// Sign up a new user with email, password, firstName, and lastName.
export async function signUp(email, password, firstName, lastName) {
  // Updated sign up function to include firstName and lastName in user metadata.
  const { user, error } = await supabase.auth.signUp(
    { email, password },
    { data: { firstName, lastName } }
  );
  if (error) throw error;
  return user;
}

// Sign in an existing user.
export async function signIn(email, password) {
  const { user, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return user;
}

// Sign in with GitHub.
export async function signInWithGitHub() {
  // GitHub sign up/login using OAuth.
  const { data, error } = await supabase.auth.signInWithOAuth({ provider: 'github' });
  if (error) throw error;
  return data;
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
