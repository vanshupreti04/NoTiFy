// app/api/auth/route.js
import { supabase } from '../../supabase/client';

// Email/Password Signup
export async function signUpWithEmail(email, password, firstName, lastName) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        display_name: `${firstName} ${lastName}`,
      },
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/login`,
    },
  });

  if (error) throw error;
  return data;
}

// Email/Password Login
export async function signInWithEmail(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
}

// GitHub OAuth
export async function signInWithGitHub() {
  console.log("Attempting GitHub OAuth sign-in");

  const redirectTo = process.env.NEXT_PUBLIC_SITE_URL
    ? `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`
    : "/auth/callback";

  console.log("Redirect URL:", redirectTo);

  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo,
      },
    });

    console.log("GitHub signInWithOAuth result:", { data, error });

    if (error) {
      console.error("GitHub OAuth Error:", error);
      throw error;
    }

    return data;
  } catch (err) {
    console.error("Unexpected Error in signInWithGitHub:", err);
    throw err;
  }
}

// Logout
export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

// Get Current Session
export async function getSession() {
  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  return data.session;
}

// Get Current User
export async function getUser() {
  const { data, error } = await supabase.auth.getUser();
  if (error) throw error;
  return data.user;
}