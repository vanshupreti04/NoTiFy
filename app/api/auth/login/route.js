import { signInWithEmail } from '../../../../lib/auth';

export async function POST(request) {
  const { email, password } = await request.json();
  try {
    const data = await signInWithEmail(email, password);
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}