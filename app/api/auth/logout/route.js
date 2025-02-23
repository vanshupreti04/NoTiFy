import { signOut } from '../../../../lib/auth';

export async function POST() {
  try {
    await signOut();
    return Response.json({ message: 'Logged out successfully' });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}