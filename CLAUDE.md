# CLAUDE.md

This file provides guidance for AI assistants working with this codebase.

## Project Overview

**AI Kvíz 2025** is an interactive quiz application testing knowledge about artificial intelligence events, products, and personalities from 2025. The application is written in Czech language.

- **Type**: Web-based quiz application
- **Language**: Czech (comments, UI, questions)
- **Stack**: Node.js, Express.js, Vanilla JavaScript, HTML5, CSS3
- **Database**: Supabase (PostgreSQL) - optional
- **Deployment**: Render

## Repository Structure

```
├── public/                  # Frontend static files
│   ├── index.html          # Main HTML page with three screens
│   ├── app.js              # Main application logic (AIQuiz class)
│   ├── questions.js        # Quiz data (50 questions, 5 sections)
│   └── styles.css          # Styles with CSS variables, dark theme
├── server.js               # Express.js server with API endpoints
├── package.json            # Dependencies and scripts
├── render.yaml             # Render deployment configuration
├── supabase-schema.sql     # Database schema for quiz_results table
├── .env.example            # Environment variable template
├── .gitignore              # Git ignore rules
└── README.md               # User documentation (Czech)
```

## Development Commands

```bash
# Install dependencies
npm install

# Start the server (production)
npm start

# Development mode (same as start)
npm run dev
```

The server runs on `http://localhost:3000` by default.

## Environment Variables

Create a `.env` file based on `.env.example`:

| Variable | Description | Required |
|----------|-------------|----------|
| `SUPABASE_URL` | Supabase project URL | No |
| `SUPABASE_ANON_KEY` | Supabase anonymous key | No |
| `PORT` | Server port (default: 3000) | No |

Supabase is optional - the app works without it (results won't be persisted).

## Architecture

### Backend (`server.js`)

Express server with:
- Static file serving from `/public`
- CORS enabled
- Graceful Supabase fallback when not configured

**API Endpoints:**
- `POST /api/results` - Save quiz result (playerName, score, totalQuestions, answers, completedAt)
- `GET /api/leaderboard` - Get top 10 results ordered by percentage

### Frontend

**`public/app.js`** - Main `AIQuiz` class:
- `initializeQuestions()` - Loads questions with shuffled answers (Fisher-Yates)
- `startQuiz()` - Initializes game state
- `displayQuestion()` - Renders current question and options
- `selectAnswer()` - Handles answer selection, scoring
- `showResults()` - Displays final results with section breakdown
- `saveResults()` - Sends results to backend API

**`public/questions.js`** - Quiz data structure:
```javascript
const quizData = {
  sections: [
    {
      name: "Sekce 1 – ...",
      questions: [
        {
          question: "Question text?",
          answers: [
            { text: "Answer A", correct: false },
            { text: "Answer B", correct: true },
            // ...
          ]
        }
      ]
    }
  ]
}
```

**`public/styles.css`** - CSS with:
- CSS custom properties (variables) for theming
- Dark theme by default
- Responsive design (mobile breakpoint at 600px)
- Gradient colors: `#6366f1` to `#8b5cf6`

### Database Schema

The `quiz_results` table stores:
- `id` (UUID) - Primary key
- `player_name` (VARCHAR) - Player name
- `score` (INTEGER) - Number of correct answers
- `total_questions` (INTEGER) - Total questions
- `percentage` (INTEGER) - Score percentage
- `answers` (JSONB) - Detailed answer data
- `completed_at`, `created_at` (TIMESTAMP)

## Code Conventions

1. **Language**: All comments, variable names in user-facing code, and UI text are in Czech
2. **No TypeScript**: Plain JavaScript throughout
3. **No Tests**: No test framework configured
4. **No Linting**: No ESLint or Prettier configured
5. **Class-based**: Frontend uses ES6 class (`AIQuiz`)
6. **Async/await**: Used for API calls and database operations

## Key Implementation Details

### Answer Shuffling
Answers are shuffled for each game using Fisher-Yates algorithm to prevent memorization of answer positions.

### Screens
The app has three screens managed by CSS classes:
1. `#start-screen` - Welcome screen with name input
2. `#quiz-screen` - Question display with progress
3. `#results-screen` - Final score with section breakdown

### Scoring
- Each correct answer = 1 point
- Section-wise tracking for detailed results
- Percentage-based messages (90%+ = "AI expert", etc.)

## Deployment

### Render (Recommended)
1. Connect GitHub repo to Render
2. Render auto-detects `render.yaml`
3. Set environment variables in Render dashboard

### Manual
1. Set up Node.js environment (>=18.0.0)
2. Run `npm install`
3. Configure environment variables
4. Run `npm start`

## Common Tasks

### Adding New Questions
Edit `public/questions.js`:
1. Add to existing section or create new section
2. Follow the structure: `{ question: "...", answers: [...] }`
3. Mark one answer as `correct: true`

### Modifying Styles
Edit `public/styles.css`:
- Theme colors are in `:root` CSS variables
- Main gradient: `--gradient`
- Background colors: `--bg-dark`, `--bg-card`

### Updating API Endpoints
Edit `server.js`:
- All routes use async/await
- Error handling returns `{ success: false, error: message }`
- Success returns `{ success: true, data: ... }`

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| express | ^4.18.2 | Web server |
| @supabase/supabase-js | ^2.39.0 | Database client |
| cors | ^2.8.5 | CORS middleware |
| dotenv | ^16.3.1 | Environment variables |
