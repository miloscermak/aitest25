// AI Kvíz 2025 - Hlavní aplikační logika

class AIQuiz {
    constructor() {
        this.currentQuestion = 0;
        this.score = 0;
        this.answers = [];
        this.questions = [];
        this.sectionScores = {};
        this.playerName = '';

        this.initializeQuestions();
        this.bindEvents();
    }

    // Zamíchání pole (Fisher-Yates shuffle)
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // Inicializace otázek s promíchanými odpověďmi
    initializeQuestions() {
        this.questions = [];
        this.sectionScores = {};

        quizData.sections.forEach((section, sectionIndex) => {
            this.sectionScores[section.name] = { correct: 0, total: section.questions.length };

            section.questions.forEach((q, questionIndex) => {
                // Zamícháme odpovědi pro každou otázku
                const shuffledAnswers = this.shuffleArray(q.answers);

                this.questions.push({
                    question: q.question,
                    answers: shuffledAnswers,
                    sectionName: section.name,
                    sectionIndex: sectionIndex,
                    originalIndex: questionIndex
                });
            });
        });
    }

    bindEvents() {
        document.getElementById('start-btn').addEventListener('click', () => this.startQuiz());
        document.getElementById('next-btn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('restart-btn').addEventListener('click', () => this.restartQuiz());

        // Enter pro start
        document.getElementById('player-name').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.startQuiz();
        });
    }

    startQuiz() {
        this.playerName = document.getElementById('player-name').value.trim() || 'Anonymní hráč';
        this.currentQuestion = 0;
        this.score = 0;
        this.answers = [];
        this.initializeQuestions();

        this.showScreen('quiz-screen');
        this.displayQuestion();
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    displayQuestion() {
        const question = this.questions[this.currentQuestion];
        const letters = ['A', 'B', 'C', 'D'];

        // Aktualizace headeru
        document.getElementById('section-name').textContent = question.sectionName;
        document.getElementById('question-counter').textContent = `${this.currentQuestion + 1} / ${this.questions.length}`;
        document.getElementById('current-score').textContent = this.score;

        // Progress bar
        const progress = ((this.currentQuestion) / this.questions.length) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;

        // Otázka
        document.getElementById('question-text').textContent = question.question;

        // Odpovědi
        const optionsContainer = document.getElementById('options');
        optionsContainer.innerHTML = '';

        question.answers.forEach((answer, index) => {
            const option = document.createElement('div');
            option.className = 'option';
            option.dataset.index = index;
            option.innerHTML = `
                <span class="option-letter">${letters[index]}</span>
                <span class="option-text">${answer.text}</span>
            `;
            option.addEventListener('click', () => this.selectAnswer(index));
            optionsContainer.appendChild(option);
        });

        // Skrýt feedback
        document.getElementById('feedback').classList.add('hidden');
    }

    selectAnswer(selectedIndex) {
        const question = this.questions[this.currentQuestion];
        const options = document.querySelectorAll('.option');
        const selectedAnswer = question.answers[selectedIndex];
        const isCorrect = selectedAnswer.correct;

        // Zakázat další klikání
        options.forEach(opt => opt.classList.add('disabled'));

        // Označit vybranou odpověď
        options[selectedIndex].classList.add('selected');

        // Najít správnou odpověď a označit ji
        question.answers.forEach((answer, index) => {
            if (answer.correct) {
                options[index].classList.add('correct');
            } else if (index === selectedIndex) {
                options[index].classList.add('incorrect');
            }
        });

        // Aktualizovat skóre
        if (isCorrect) {
            this.score++;
            this.sectionScores[question.sectionName].correct++;
            document.getElementById('current-score').textContent = this.score;
        }

        // Uložit odpověď
        this.answers.push({
            questionIndex: this.currentQuestion,
            question: question.question,
            selectedAnswer: selectedAnswer.text,
            correctAnswer: question.answers.find(a => a.correct).text,
            isCorrect: isCorrect,
            section: question.sectionName
        });

        // Zobrazit feedback
        this.showFeedback(isCorrect, question.answers.find(a => a.correct).text);
    }

    showFeedback(isCorrect, correctAnswer) {
        const feedback = document.getElementById('feedback');
        feedback.classList.remove('hidden', 'correct', 'incorrect');
        feedback.classList.add(isCorrect ? 'correct' : 'incorrect');

        const icon = feedback.querySelector('.feedback-icon');
        const text = feedback.querySelector('.feedback-text');
        const nextBtn = document.getElementById('next-btn');

        if (isCorrect) {
            icon.textContent = '✓';
            text.innerHTML = `<strong>Správně!</strong>`;
        } else {
            icon.textContent = '✗';
            text.innerHTML = `<strong>Bohužel špatně</strong><br>Správná odpověď: ${correctAnswer}`;
        }

        // Změnit text tlačítka pro poslední otázku
        if (this.currentQuestion === this.questions.length - 1) {
            nextBtn.innerHTML = `
                <span>Zobrazit výsledky</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
            `;
        }
    }

    nextQuestion() {
        this.currentQuestion++;

        if (this.currentQuestion >= this.questions.length) {
            this.showResults();
        } else {
            this.displayQuestion();
        }
    }

    async showResults() {
        this.showScreen('results-screen');

        const percentage = Math.round((this.score / this.questions.length) * 100);

        // Jméno hráče
        document.getElementById('player-result-name').textContent = this.playerName;

        // Animované skóre
        document.getElementById('final-score').textContent = this.score;
        document.getElementById('score-percentage').textContent = `${percentage}%`;

        // Kruh s progresem
        const circle = document.getElementById('score-circle');
        const circumference = 2 * Math.PI * 54; // r = 54
        const offset = circumference - (percentage / 100) * circumference;

        // Přidat gradient definici do SVG
        const svg = circle.parentElement;
        if (!svg.querySelector('defs')) {
            const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
            defs.innerHTML = `
                <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#6366f1"/>
                    <stop offset="100%" stop-color="#8b5cf6"/>
                </linearGradient>
            `;
            svg.insertBefore(defs, svg.firstChild);
        }
        circle.style.stroke = 'url(#scoreGradient)';

        setTimeout(() => {
            circle.style.strokeDashoffset = offset;
        }, 100);

        // Zpráva podle skóre
        let message = '';
        if (percentage >= 90) {
            message = 'Vynikající! Jste AI expert!';
        } else if (percentage >= 70) {
            message = 'Skvělý výkon! Máte přehled o AI.';
        } else if (percentage >= 50) {
            message = 'Solidní znalosti. Je co zlepšovat!';
        } else if (percentage >= 30) {
            message = 'Základy zvládáte. Sledujte AI novinky!';
        } else {
            message = 'AI svět na vás čeká. Začněte objevovat!';
        }
        document.getElementById('score-message').textContent = message;

        // Statistiky
        document.getElementById('correct-count').textContent = this.score;
        document.getElementById('incorrect-count').textContent = this.questions.length - this.score;

        // Výsledky podle sekcí
        const sectionResults = document.getElementById('section-results');
        sectionResults.innerHTML = '<h3 style="margin-bottom: 15px; font-size: 1rem;">Výsledky podle sekcí</h3>';

        Object.entries(this.sectionScores).forEach(([name, scores]) => {
            const shortName = name.replace(/Sekce \d+ – /, '');
            const sectionPercentage = Math.round((scores.correct / scores.total) * 100);

            const div = document.createElement('div');
            div.className = 'section-result';
            div.innerHTML = `
                <span class="section-result-name">${shortName}</span>
                <span class="section-result-score">${scores.correct}/${scores.total} (${sectionPercentage}%)</span>
            `;
            sectionResults.appendChild(div);
        });

        // Uložit výsledek do databáze
        await this.saveResults();
    }

    async saveResults() {
        try {
            const response = await fetch('/api/results', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    playerName: this.playerName,
                    score: this.score,
                    totalQuestions: this.questions.length,
                    answers: this.answers,
                    completedAt: new Date().toISOString()
                })
            });

            const data = await response.json();
            if (data.success) {
                console.log('Výsledky úspěšně uloženy');
            }
        } catch (error) {
            console.error('Chyba při ukládání výsledků:', error);
        }
    }

    restartQuiz() {
        document.getElementById('player-name').value = '';

        // Reset progress circle
        const circle = document.getElementById('score-circle');
        circle.style.strokeDashoffset = 339.292;

        // Reset next button text
        document.getElementById('next-btn').innerHTML = `
            <span>Další otázka</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
        `;

        this.showScreen('start-screen');
    }
}

// Inicializace aplikace po načtení DOM
document.addEventListener('DOMContentLoaded', () => {
    new AIQuiz();
});
