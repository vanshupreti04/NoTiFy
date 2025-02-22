import { NextResponse } from "next/server";
import { signUp } from "../../../../backend/auth";

export async function POST(req) {
  try {
    // Ensure only POST requests are processed
    if (req.method !== "POST") {
      return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
    }

    // Parse request body
    const body = await req.json();
    const { email, password, firstName, lastName } = body;

    // Validate input
    if (!email || !password || !firstName || !lastName) {
      console.error("Validation error: Missing required fields");
      return NextResponse.json(
        { success: false, error: "All fields (email, password, first name, last name) are required." },
        { status: 200 }
      );
    }

    // Call signUp from auth.js
    const signupResponse = await signUp(email, password, firstName, lastName);

    // Return success
    return NextResponse.json({ success: true, data: signupResponse }, { status: 200 });
  } catch (error) {
    console.error("Sign-up error:", error);
    // Return error message
    return NextResponse.json({ success: false, error: error.message || "Registration failed" }, { status: 200 });
  }
}
