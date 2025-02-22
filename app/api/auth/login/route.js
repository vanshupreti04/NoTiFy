import { NextResponse } from "next/server";
import { signIn } from "../../../../backend/auth";

export async function POST(req) {
  try {
    if (req.method !== "POST") {
      return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
    }

    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Email and password are required." },
        { status: 200 }
      );
    }

    const signInResult = await signIn(email, password);
    if (signInResult.error) {
      return NextResponse.json({ success: false, error: signInResult.error }, { status: 200 });
    }

    const { session, user } = signInResult;
    return NextResponse.json(
      {
        success: true,
        data: {
          user: { id: user.id, email: user.email },
          session: { expires_at: session.expires_at }
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Sign-in error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Login failed" },
      { status: 200 }
    );
  }
}
