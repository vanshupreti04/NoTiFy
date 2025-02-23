import { signInWithGitHub } from '../../../../lib/auth';

export async function GET() {
  try {
    const data = await signInWithGitHub();
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}