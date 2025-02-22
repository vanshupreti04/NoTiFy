import { NextResponse } from "next/server";
import { signIn } from "../../../../backend/auth";

export async function POST(req) {
  try {
    // Ensure only POST requests are processed
    if (req.method !== "POST") {
      return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
    }

    // Parse request body safely
    const body = await req.json();
    const { email, password } = body;

    // Validate input (Prevent empty requests)
    if (!email || !password) {
      return NextResponse.json({ success: false, error: "Email and password are required." }, { status: 200 });
    }

    // Sign in the user
    const signInResult = await signIn(email, password);
    if (!signInResult || !signInResult.session) {
      return NextResponse.json(
        { success: false, error: "Session not found. Authentication failed." },
        { status: 200 }
      );
    }

    const { session, user } = signInResult;

    return NextResponse.json({
      success: true,
      data: {
        user: {
          id: user.id,
          email: user.email,
        },
        session: {
          expires_at: session.expires_at,
        },
      },
    }, { status: 200 });

  } catch (error) {
    console.error("Sign-in error:", error);

    // Handle unverified email scenario explicitly
    if (error.message.includes("verify your email")) {
      return NextResponse.json({ success: false, error: "Please verify your email before logging in." }, { status: 200 });
    }

    // General error handling
    return NextResponse.json({ success: false, error: error.message || "Login failed" }, { status: 200 });
  }
}
