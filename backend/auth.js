import { supabase } from "./supabaseClient";

// 🔹 Sign up a new user (Email & Password)
export async function signUp(email, password, firstName, lastName) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { first_name: firstName, last_name: lastName } }
  });

  if (error) throw new Error("Sign-up failed. Please try again.");
  return { message: "Check your email for verification before logging in." };
}

// 🔹 Sign in with Email & Password (Ensures Email is Verified)
export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    console.error("Supabase signInWithPassword error:", error.message);
    if (error.message.toLowerCase().includes("invalid login credentials")) {
      throw new Error("Email not registered. Please sign up.");
    }
    throw new Error("Invalid email or password.");
  }
  const { session, user } = data;
  if (!user) {
    console.error("Supabase user not found in signInWithPassword response.");
    throw new Error("No account found for that email. Please sign up.");
  }

  // Ensure email is verified using the supabase client
  const { data: authUser, error: authError } = await supabase.auth.getUser();
  if (authError) throw new Error("Authentication error. Please try again.");
  if (!authUser?.user?.email_confirmed_at) {
    throw new Error("Please verify your email before logging in.");
  }

  // Upsert profile to ensure it exists (using the default supabase client)
  const { error: profileError } = await supabase
    .from("profiles")
    .upsert([{
      id: authUser.user.id,
      email,
      first_name: authUser.user.user_metadata?.first_name || "",
      last_name: authUser.user.user_metadata?.last_name || ""
    }])
    .select(); // Required for RLS policies

  if (profileError) throw new Error("Profile creation failed.");

  return { message: "Login successful", user, session }; // Return both user and session
}

// Removed GitHub OAuth functions.
// Use functions from /d:/test 3/backend/githubAuth.js for GitHub authentication

// 🔹 Sign out user
export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error("Sign-out failed.");
}

// 🔹 Get current user session
export async function getSession() {
  const { data, error } = await supabase.auth.getSession();
  if (error) throw new Error("Session retrieval failed.");
  return data;
}

// 🔹 Update User Profile (Includes password & email updates)
export async function updateProfile(userId, { email, firstName, lastName, photoUrl, password }) {
  let updates = {};

  // 🔹 Fetch current user auth details
  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (userError) throw new Error("Failed to fetch user data.");

  const currentUser = userData?.user;
  const isGitHubUser = currentUser?.app_metadata?.provider === "github";

  if (firstName) updates.first_name = firstName;
  if (lastName) updates.last_name = lastName;
  if (photoUrl) updates.photo_url = photoUrl;

  // 🔹 Handle email update (only for non-GitHub users)
  if (email && !isGitHubUser) {
    const { error: emailError } = await supabase.auth.updateUser({ email });
    if (emailError) throw new Error("Email update failed.");
    updates.email = email;
  } else if (email && isGitHubUser) {
    throw new Error("GitHub users cannot update email.");
  }

  // 🔹 Allow GitHub users to set a password
  if (password) {
    const { error: passwordError } = await supabase.auth.updateUser({ password });
    if (passwordError) throw new Error("Password update failed.");
  }

  // 🔹 Update `profiles` if changes exist
  if (Object.keys(updates).length > 0) {
    const { error: profileError } = await supabase
      .from("profiles")
      .update(updates)
      .eq("id", userId);

    if (profileError) throw new Error("Profile update failed.");
  }

  return { message: "Profile updated successfully" };
}
