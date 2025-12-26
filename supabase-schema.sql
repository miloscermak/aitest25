-- Vytvořte tuto tabulku v Supabase SQL Editoru

CREATE TABLE quiz_results (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    player_name VARCHAR(255) NOT NULL DEFAULT 'Anonymní hráč',
    score INTEGER NOT NULL,
    total_questions INTEGER NOT NULL,
    percentage INTEGER NOT NULL,
    answers JSONB,
    completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index pro rychlejší řazení žebříčku
CREATE INDEX idx_quiz_results_percentage ON quiz_results(percentage DESC);

-- Povolení RLS (Row Level Security)
ALTER TABLE quiz_results ENABLE ROW LEVEL SECURITY;

-- Politika pro vkládání (kdokoli může přidat výsledek)
CREATE POLICY "Anyone can insert results" ON quiz_results
    FOR INSERT WITH CHECK (true);

-- Politika pro čtení (kdokoli může číst výsledky)
CREATE POLICY "Anyone can read results" ON quiz_results
    FOR SELECT USING (true);
