require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Supabase client
let supabase = null;
if (process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY) {
    supabase = createClient(
        process.env.SUPABASE_URL,
        process.env.SUPABASE_ANON_KEY
    );
}

// API endpoint pro uložení výsledku kvízu
app.post('/api/results', async (req, res) => {
    const { playerName, score, totalQuestions, answers, completedAt } = req.body;

    if (!supabase) {
        console.log('Supabase není nakonfigurován, výsledky se neukládají do databáze');
        return res.json({ success: true, message: 'Výsledek zaznamenán (bez databáze)' });
    }

    try {
        const { data, error } = await supabase
            .from('quiz_results')
            .insert([
                {
                    player_name: playerName || 'Anonymní hráč',
                    score: score,
                    total_questions: totalQuestions,
                    percentage: Math.round((score / totalQuestions) * 100),
                    answers: JSON.stringify(answers),
                    completed_at: completedAt || new Date().toISOString()
                }
            ])
            .select();

        if (error) throw error;

        res.json({ success: true, data });
    } catch (error) {
        console.error('Chyba při ukládání výsledku:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// API endpoint pro získání nejlepších výsledků
app.get('/api/leaderboard', async (req, res) => {
    if (!supabase) {
        return res.json({ success: true, data: [] });
    }

    try {
        const { data, error } = await supabase
            .from('quiz_results')
            .select('player_name, score, total_questions, percentage, completed_at')
            .order('percentage', { ascending: false })
            .order('completed_at', { ascending: true })
            .limit(10);

        if (error) throw error;

        res.json({ success: true, data });
    } catch (error) {
        console.error('Chyba při načítání žebříčku:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Serve index.html pro všechny ostatní routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server běží na portu ${PORT}`);
    if (!supabase) {
        console.log('UPOZORNĚNÍ: Supabase není nakonfigurován. Nastavte SUPABASE_URL a SUPABASE_ANON_KEY.');
    }
});
