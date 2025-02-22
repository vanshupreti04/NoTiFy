CREATE TABLE IF NOT EXISTS api.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE,
  first_name TEXT,
  last_name TEXT,
  photo_url TEXT DEFAULT 'https://ltohrjagoqpdifhvbxda.supabase.co/storage/v1/object/public/NoTiFy%20profile%20image//profile.jpeg',
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE api.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow access to owner" ON api.profiles
  FOR ALL
  USING (auth.uid() = id);

CREATE POLICY "Allow inserts for authenticated users" ON api.profiles
  FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Auto-update updated_at on profile changes
CREATE OR REPLACE FUNCTION update_profile_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_profiles
BEFORE UPDATE ON api.profiles
FOR EACH ROW
EXECUTE FUNCTION update_profile_timestamp();
