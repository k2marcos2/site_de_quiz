// Função para embaralhar array (Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateQuiz() {
    const questions = [
        {
            question: "Qual é o nome do protagonista de 'Naruto'?",
            options: ["Sasuke Uchiha", "Naruto Uzumaki", "Kakashi Hatake", "Itachi Uchiha"],
            correct: "b"
        },
        {
            question: "Em 'Attack on Titan', qual é o nome do titã de Eren Yeager?",
            options: ["Titã Colossal", "Titã Blindado", "Titã de Ataque", "Titã Bestial"],
            correct: "c"
        },
        {
            question: "Qual anime é conhecido pela frase 'O-neeto'?",
            options: ["Hunter x Hunter", "JoJo's Bizarre Adventure", "Death Note", "Bleach"],
            correct: "b"
        },
        {
            question: "Quem é o capitão dos Piratas do Chapéu de Palha em 'One Piece'?",
            options: ["Roronoa Zoro", "Monkey D. Luffy", "Trafalgar Law", "Portgas D. Ace"],
            correct: "b"
        },
        {
            question: "Em 'Dragon Ball Z', quem é o pai de Goku?",
            options: ["Vegeta", "Piccolo", "Bardock", "Raditz"],
            correct: "c"
        },
        {
            question: "Qual é o nome do caderno em 'Death Note'?",
            options: ["Life Note", "Death Note", "Kill Note", "Shinigami Note"],
            correct: "b"
        },
        {
            question: "Em 'My Teen Romantic Comedy Yahari', qual é o nome do clube do protagonista?",
            options: ["Clube de Literatura", "Clube de Serviço", "Clube de Música", "Clube de Arte"],
            correct: "b"
        },
        {
            question: "Qual anime apresenta os 'Caçadores de Demônios' (Demon Slayers)?",
            options: ["Tokyo Ghoul", "Demon Slayer: Kimetsu no Yaiba", "Black Clover", "Blue Exorcist"],
            correct: "b"
        },
        {
            question: "Em 'Fullmetal Alchemist', qual é o objetivo principal dos irmãos Elric?",
            options: ["Destruir os Homunculi", "Encontrar a Pedra Filosofal", "Tornar-se Alquimista Federal", "Vingar sua mãe"],
            correct: "b"
        },
        {
            question: "Qual é o nome do protagonista de 'Hunter x Hunter'?",
            options: ["Killua Zoldyck", "Gon Freecss", "Kurapika", "Leorio Paradinight"],
            correct: "b"
        },
        {
            question: "Em 'Sailor Moon', qual é o nome da protagonista na forma civil?",
            options: ["Rei Hino", "Usagi Tsukino", "Minako Aino", "Makoto Kino"],
            correct: "b"
        },
        {
            question: "Qual anime tem um grupo chamado 'Akatsuki'?",
            options: ["Fairy Tail", "Naruto", "Bleach", "Yu Yu Hakusho"],
            correct: "b"
        },
        {
            question: "Em 'Cowboy Bebop', qual é o nome da nave principal?",
            options: ["Swordfish", "Bebop", "Red Tail", "Hammerhead"],
            correct: "b"
        },
        {
            question: "Qual é o nome do sensei de Izuku Midoriya em 'My Hero Academia'?",
            options: ["All Might", "Endeavor", "Aizawa", "Hawks"],
            correct: "a"
        },
        {
            question: "Em 'Neon Genesis Evangelion', qual é o nome do primeiro Eva pilotado por Shinji?",
            options: ["Eva-00", "Eva-01", "Eva-02", "Eva-03"],
            correct: "b"
        },
        {
            question: "Qual anime apresenta a guilda de magos 'Fairy Tail'?",
            options: ["Black Clover", "Fairy Tail", "Magi", "Seven Deadly Sins"],
            correct: "b"
        },
        {
            question: "Em 'Bleach', qual é o nome da espada de Ichigo Kurosaki?",
            options: ["Tensa Zangetsu", "Senbonzakura", "Hyorinmaru", "Benihime"],
            correct: "a"
        },
        {
            question: "Qual é o nome do protagonista de 'Yu Yu Hakusho'?",
            options: ["Hiei", "Kurama", "Yusuke Urameshi", "Kuwabara"],
            correct: "c"
        },
        {
            question: "Em 'Steins;Gate', qual é o nome do cientista que cria a máquina do tempo?",
            options: ["Rintarou Okabe", "Itaru Hashida", "Makise Kurisu", "Mayuri Shiina"],
            correct: "a"
        },
        {
            question: "Qual anime apresenta a escola 'UA High School'?",
            options: ["Assassination Classroom", "My Hero Academia", "Haikyuu!!", "Blue Lock"],
            correct: "b"
        }
    ];

    // Embaralhar as perguntas
    const shuffledQuestions = shuffleArray([...questions]);

    const form = document.getElementById('quiz-form');
    shuffledQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `<h3>${index + 1}. ${q.question}</h3>`;
        
        q.options.forEach((option, i) => {
            const optionLetter = String.fromCharCode(97 + i); // a, b, c, d
            questionDiv.innerHTML += `
                <label>
                    <input type="radio" name="q${index + 1}" value="${optionLetter}">
                    ${option}
                </label>
            `;
        });
        
        form.appendChild(questionDiv);
    });

    // Adicionar botão de envio
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Enviar Respostas';
    form.appendChild(submitButton);

    return shuffledQuestions; // Retorna perguntas embaralhadas para verificação
}

// Inicializar o quiz
const questions = generateQuiz();

// Verificar respostas
document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let score = 0;

    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index + 1}"]:checked`);
        if (selected && selected.value === q.correct) {
            score++;
        }
    });

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Você acertou ${score} de ${questions.length} perguntas!`;
});