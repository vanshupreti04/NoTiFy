-- Profiles table: Includes user's email and photo_url.
DROP TABLE IF EXISTS api.profiles;
CREATE TABLE IF NOT EXISTS api.profiles (
  id UUID PRIMARY KEY,                   -- Changed to UUID for user id
  email TEXT,
  firstName TEXT,
  lastName TEXT,
  photo_url TEXT DEFAULT 'https://ltohrjagoqpdifhvbxda.supabase.co/storage/v1/object/public/NoTiFy%20profile%20image//profile.jpeg',  -- Hosted default image URL
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE api.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow access to owner" ON api.profiles
  FOR ALL
  USING (id = auth.uid());
CREATE POLICY "Allow inserts for authenticated users" ON api.profiles
  FOR INSERT
  WITH CHECK (auth.uid() = id);
