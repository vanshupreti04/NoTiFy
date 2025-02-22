import { supabase } from "../../../../backend/supabaseClient";
import { createUserProfile } from "../../../../backend/db";

export async function POST(request) {
  const { firstName, lastName, email, password } = await request.json();
  
  const { data, error } = await supabase.auth.signUp(
    { email, password },
    { data: { firstName, lastName } }
  );

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }

  // Get the uuid from Supabase auth response
  const uuid = data.user?.id;
  if (uuid) {
    try {
      await createUserProfile({ uuid, firstName, lastName, email });
    } catch (profileError) {
      return new Response(JSON.stringify({ error: profileError.message }), { status: 400 });
    }
  }

  return new Response(JSON.stringify({ data }), { status: 200 });
}
