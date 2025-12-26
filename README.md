# AI Kvíz 2025

Interaktivní kvízová aplikace testující znalosti o umělé inteligenci v roce 2025.

## Funkce

- 50 otázek z 5 tematických sekcí
- Promíchané odpovědi pro každou hru
- Okamžitá zpětná vazba po každé odpovědi
- Detailní vyhodnocení na konci
- Ukládání výsledků do Supabase databáze

## Rychlý start

### 1. Instalace závislostí

```bash
npm install
```

### 2. Nastavení Supabase (volitelné)

1. Vytvořte projekt na [supabase.com](https://supabase.com)
2. Spusťte SQL z `supabase-schema.sql` v SQL Editoru
3. Zkopírujte `.env.example` na `.env` a vyplňte údaje:

```bash
cp .env.example .env
```

### 3. Spuštění

```bash
npm start
```

Aplikace běží na `http://localhost:3000`

## Deployment na Render

### Automatický deployment

1. Propojte GitHub repozitář s Render
2. Render automaticky detekuje `render.yaml`
3. Nastavte environment variables:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`

### Manuální deployment

1. Vytvořte nový Web Service na [render.com](https://render.com)
2. Vyberte Node.js environment
3. Build command: `npm install`
4. Start command: `npm start`
5. Přidejte environment variables pro Supabase

## Supabase Schema

```sql
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
```

## Struktura projektu

```
├── public/
│   ├── index.html      # Hlavní HTML stránka
│   ├── styles.css      # Styly aplikace
│   ├── questions.js    # Data kvízových otázek
│   └── app.js          # Hlavní aplikační logika
├── server.js           # Express.js server
├── package.json        # Závislosti projektu
├── render.yaml         # Konfigurace pro Render
└── supabase-schema.sql # SQL pro vytvoření tabulky
```

## Technologie

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Backend**: Node.js, Express.js
- **Databáze**: Supabase (PostgreSQL)
- **Hosting**: Render
