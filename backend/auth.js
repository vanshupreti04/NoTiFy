import { supabase } from "./supabaseClient";

// 🔹 Sign up a new user (Email & Password)
export async function signUp(email, password, firstName, lastName) {
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { first_name: firstName, last_name: lastName } },
  });

  if (error) {
    console.error("Sign-up error:", error.message);
    throw new Error("Sign-up failed. Please try again.");
  }

  return { message: "Check your email for verification before logging in." };
}

// 🔹 Sign in with Email & Password (Ensures Email is Verified)
export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  
  if (error || !data?.user) {
    // Log detailed error for server-side debugging
    console.warn("Sign-in error:", error?.message || "User data not found.");
    // Return generic error message for production
    return { error: "Invalid email or password." };
  }

  // 🔹 Check if email is verified
  const { data: authUser, error: authError } = await supabase.auth.getUser();
  if (authError) {
    console.error("Auth error:", authError.message);
    return { error: "Authentication error. Please try again." };
  }

  if (!authUser?.user?.email_confirmed_at) {
    return { error: "Please verify your email before logging in." };
  }
  
  // 🔹 Upsert user profile to ensure it exists
  const profileData = {
    id: authUser.user.id,
    email,
    first_name: authUser.user.user_metadata?.first_name || "",
    last_name: authUser.user.user_metadata?.last_name || "",
  };

  const { error: profileError } = await supabase.from("profiles").upsert([profileData]).select();
  if (profileError) {
    console.error("Profile upsert error:", profileError.message);
    return { error: "Profile creation failed." };
  }

  return { user: data.user, session: data.session || null, message: "Login successful" };
}

// 🔹 Sign out user
export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Sign-out error:", error.message);
    throw new Error("Sign-out failed.");
  }
}

// 🔹 Get current user session
export async function getSession() {
  const { data, error } = await supabase.auth.getSession();
  if (error) {
    console.error("Session retrieval error:", error.message);
    throw new Error("Session retrieval failed.");
  }
  return data;
}

// 🔹 Update User Profile (Includes password & email updates)
export async function updateProfile(userId, { email, firstName, lastName, photoUrl, password }) {
  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (userError) {
    console.error("User fetch error:", userError.message);
    throw new Error("Failed to fetch user data.");
  }

  const currentUser = userData?.user;
  const isGitHubUser = currentUser?.app_metadata?.provider === "github";
  let updates = {};

  if (firstName) updates.first_name = firstName;
  if (lastName) updates.last_name = lastName;
  if (photoUrl) updates.photo_url = photoUrl;

  // 🔹 Handle email update (only for non-GitHub users)
  if (email) {
    if (isGitHubUser) {
      throw new Error("GitHub users cannot update email.");
    }

    const { error: emailError } = await supabase.auth.updateUser({ email });
    if (emailError) {
      console.error("Email update error:", emailError.message);
      throw new Error("Email update failed.");
    }
    updates.email = email;
  }

  // 🔹 Allow GitHub users to set a password
  if (password) {
    const { error: passwordError } = await supabase.auth.updateUser({ password });
    if (passwordError) {
      console.error("Password update error:", passwordError.message);
      throw new Error("Password update failed.");
    }
  }

  // 🔹 Update `profiles` if there are changes
  if (Object.keys(updates).length > 0) {
    const { error: profileError } = await supabase.from("profiles").update(updates).eq("id", userId);

    if (profileError) {
      console.error("Profile update error:", profileError.message);
      throw new Error("Profile update failed.");
    }
  }

  return { message: "Profile updated successfully" };
}
