-- Create the schema if it doesn't exist
CREATE SCHEMA IF NOT EXISTS api;

-- Documents table
DROP TABLE IF EXISTS api.documents;
CREATE TABLE IF NOT EXISTS api.documents (
  id TEXT,
  user_id UUID NOT NULL,                -- Changed to UUID for user_id
  name TEXT,
  content TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (id, user_id)
);
ALTER TABLE api.documents ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow access to owner" ON api.documents
  FOR ALL
  USING (user_id = auth.uid());

-- Spreadsheets table
DROP TABLE IF EXISTS api.spreadsheets;
CREATE TABLE IF NOT EXISTS api.spreadsheets (
  id TEXT,
  user_id UUID NOT NULL,                -- Changed to UUID for user_id
  name TEXT,
  data JSONB,
  colWidths JSONB,
  rowHeights JSONB,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (id, user_id)
);
ALTER TABLE api.spreadsheets ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow access to owner" ON api.spreadsheets
  FOR ALL
  USING (user_id = auth.uid());

-- Kanban table
DROP TABLE IF EXISTS api.kanban;
CREATE TABLE IF NOT EXISTS api.kanban (
  id TEXT,
  user_id UUID NOT NULL,                -- Changed to UUID for user_id
  name TEXT,
  data JSONB,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (id, user_id)
);
ALTER TABLE api.kanban ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow access to owner" ON api.kanban
  FOR ALL
  USING (user_id = auth.uid());

-- User pages table
DROP TABLE IF EXISTS api.user_pages;
CREATE TABLE IF NOT EXISTS api.user_pages (
  user_id UUID PRIMARY KEY,             -- Changed to UUID for user_id
  pages JSONB,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE api.user_pages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow access to owner" ON api.user_pages
  FOR ALL
  USING (user_id = auth.uid());