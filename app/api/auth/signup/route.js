import { signUpWithEmail } from '../../../../lib/auth';

export async function POST(request) {
  const { email, password, firstName, lastName } = await request.json();
  try {
    const data = await signUpWithEmail(email, password, firstName, lastName);
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}