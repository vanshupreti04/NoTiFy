import { supabase } from "./supabaseClient";

// Sign up a new user with email, password, firstName, and lastName.
export async function signUp(email, password, firstName, lastName) {
  // Create a new user and include firstName, lastName, and display_name in the metadata.
  const { user, error } = await supabase.auth.signUp(
    { email, password },
    { data: { firstName, lastName, display_name: `${firstName} ${lastName}` } }
  );
  if (error) throw error;
  
  if (user) {
    // Optionally update the user metadata (to ensure the display_name is set)
    const { error: updateError } = await supabase.auth.updateUser({
      data: { display_name: `${firstName} ${lastName}` },
    });
    if (updateError) {
      console.warn("Display name update error:", updateError);
    }
    // Optionally insert into "api.profiles" table so you can also track first/last names separately.
    const { error: profileError } = await supabase
      .from("api.profiles")
      .insert({ id: user.id, email, firstName, lastName });
    if (profileError) {
      console.warn("Profile insert error:", profileError);
    }
  }
  return user;
}

// Sign in an existing user.
export async function signIn(email, password) {
  const { user, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
// Check if email is verified.
  if (user && !user.email_confirmed_at) {
    throw new Error("Please verify your email before logging in.");
  }
  return user;
}

// Sign in with GitHub.
export async function signInWithGitHub() {
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

export async function updateProfile(userId, { email, firstName, lastName }) {
  const { error } = await supabase
    .from("profiles")
    .update({ email, firstName, lastName })
    .eq("id", userId);
  if (error) throw error;
}
