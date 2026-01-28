-- Tournament of Friends Database Schema
-- Run this in your Supabase SQL editor to create the tables

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Members table
CREATE TABLE IF NOT EXISTS members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  ghin_number TEXT,
  handicap_index DECIMAL(4,1),
  handicap_updated_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tournaments table
CREATE TABLE IF NOT EXISTS tournaments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  location TEXT NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  entry_fee DECIMAL(10,2) DEFAULT 0,
  par INTEGER DEFAULT 72,
  course_rating DECIMAL(4,1),
  slope_rating INTEGER,
  status TEXT DEFAULT 'upcoming' CHECK (status IN ('upcoming', 'active', 'completed')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Registrations table
CREATE TABLE IF NOT EXISTS registrations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  member_id UUID REFERENCES members(id) ON DELETE CASCADE,
  tournament_id UUID REFERENCES tournaments(id) ON DELETE CASCADE,
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'refunded')),
  payment_amount DECIMAL(10,2),
  payment_date TIMESTAMPTZ,
  registered_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(member_id, tournament_id)
);

-- Scores table
CREATE TABLE IF NOT EXISTS scores (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  member_id UUID REFERENCES members(id) ON DELETE CASCADE,
  tournament_id UUID REFERENCES tournaments(id) ON DELETE CASCADE,
  round_number INTEGER NOT NULL CHECK (round_number > 0),
  gross_score INTEGER NOT NULL,
  net_score INTEGER,
  course_handicap INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(member_id, tournament_id, round_number)
);

-- Winners (Black Jacket) table
CREATE TABLE IF NOT EXISTS winners (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  member_id UUID REFERENCES members(id) ON DELETE SET NULL,
  tournament_id UUID REFERENCES tournaments(id) ON DELETE SET NULL,
  year INTEGER NOT NULL,
  location TEXT NOT NULL,
  winning_score INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(year)
);

-- News/Blog articles table
CREATE TABLE IF NOT EXISTS news (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT,
  excerpt TEXT,
  featured_image TEXT,
  author_id UUID REFERENCES members(id) ON DELETE SET NULL,
  published_at TIMESTAMPTZ,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Gallery images table
CREATE TABLE IF NOT EXISTS gallery (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tournament_id UUID REFERENCES tournaments(id) ON DELETE SET NULL,
  image_url TEXT NOT NULL,
  caption TEXT,
  year INTEGER NOT NULL,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for common queries
CREATE INDEX IF NOT EXISTS idx_members_email ON members(email);
CREATE INDEX IF NOT EXISTS idx_members_ghin ON members(ghin_number);
CREATE INDEX IF NOT EXISTS idx_tournaments_status ON tournaments(status);
CREATE INDEX IF NOT EXISTS idx_tournaments_dates ON tournaments(start_date, end_date);
CREATE INDEX IF NOT EXISTS idx_registrations_tournament ON registrations(tournament_id);
CREATE INDEX IF NOT EXISTS idx_registrations_member ON registrations(member_id);
CREATE INDEX IF NOT EXISTS idx_scores_tournament ON scores(tournament_id);
CREATE INDEX IF NOT EXISTS idx_scores_member ON scores(member_id);
CREATE INDEX IF NOT EXISTS idx_news_status ON news(status);
CREATE INDEX IF NOT EXISTS idx_news_slug ON news(slug);
CREATE INDEX IF NOT EXISTS idx_gallery_tournament ON gallery(tournament_id);
CREATE INDEX IF NOT EXISTS idx_gallery_year ON gallery(year);

-- Row Level Security (RLS) Policies
-- Enable RLS on all tables
ALTER TABLE members ENABLE ROW LEVEL SECURITY;
ALTER TABLE tournaments ENABLE ROW LEVEL SECURITY;
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE winners ENABLE ROW LEVEL SECURITY;
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;

-- Public read access for tournaments, winners, news (published), gallery
CREATE POLICY "Public read tournaments" ON tournaments FOR SELECT USING (true);
CREATE POLICY "Public read winners" ON winners FOR SELECT USING (true);
CREATE POLICY "Public read published news" ON news FOR SELECT USING (status = 'published');
CREATE POLICY "Public read gallery" ON gallery FOR SELECT USING (true);
CREATE POLICY "Public read scores" ON scores FOR SELECT USING (true);

-- Members can read their own data
CREATE POLICY "Members read own data" ON members FOR SELECT USING (auth.uid()::text = id::text);

-- Members can update their own data
CREATE POLICY "Members update own data" ON members FOR UPDATE USING (auth.uid()::text = id::text);

-- Registrations: members can see their own
CREATE POLICY "Members read own registrations" ON registrations FOR SELECT
  USING (auth.uid()::text = member_id::text);

-- Function to update timestamps
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER update_scores_updated_at
  BEFORE UPDATE ON scores
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_news_updated_at
  BEFORE UPDATE ON news
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- View for leaderboard with calculated totals
CREATE OR REPLACE VIEW leaderboard AS
SELECT
  m.id as member_id,
  m.first_name,
  m.last_name,
  m.handicap_index,
  t.id as tournament_id,
  t.name as tournament_name,
  t.par,
  COALESCE(SUM(s.gross_score), 0) as total_gross,
  COALESCE(SUM(s.net_score), 0) as total_net,
  COUNT(s.round_number) as rounds_played,
  COALESCE(SUM(s.gross_score), 0) - (COUNT(s.round_number) * t.par) as to_par
FROM members m
JOIN registrations r ON r.member_id = m.id
JOIN tournaments t ON t.id = r.tournament_id
LEFT JOIN scores s ON s.member_id = m.id AND s.tournament_id = t.id
WHERE t.status IN ('active', 'completed')
GROUP BY m.id, m.first_name, m.last_name, m.handicap_index, t.id, t.name, t.par
ORDER BY total_net ASC, total_gross ASC;

-- Grant access to the leaderboard view
GRANT SELECT ON leaderboard TO anon, authenticated;

-- Sample data for development (optional)
-- Uncomment to insert sample data

/*
-- Insert sample tournament
INSERT INTO tournaments (name, location, start_date, end_date, par, status)
VALUES ('Tournament of Friends 2025', 'TBD Golf Course', '2025-10-01', '2025-10-03', 72, 'upcoming');

-- Insert sample winners
INSERT INTO winners (year, location, winning_score)
VALUES
  (2024, 'Sample Golf Course, City, State', -5),
  (2023, 'Another Course, City, State', -3),
  (2022, 'Third Course, City, State', -4);
*/
