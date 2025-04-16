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
            question: "Qual é a capital do Japão?",
            options: ["Tóquio", "Osaka", "Quioto", "Hiroshima"],
            correct: "a"
        },
        {
            question: "Quem escreveu 'Dom Quixote'?",
            options: ["William Shakespeare", "Miguel de Cervantes", "Dante Alighieri", "Victor Hugo"],
            correct: "b"
        },
        {
            question: "Qual é o maior planeta do Sistema Solar?",
            options: ["Terra", "Marte", "Júpiter", "Saturno"],
            correct: "c"
        },
        {
            question: "Qual é o elemento químico com símbolo Au?",
            options: ["Prata", "Ouro", "Cobre", "Alumínio"],
            correct: "b"
        },
        {
            question: "Em que ano ocorreu o primeiro voo dos irmãos Wright?",
            options: ["1899", "1903", "1914", "1927"],
            correct: "b"
        },
        {
            question: "Qual é o maior deserto do mundo?",
            options: ["Saara", "Gobi", "Antártida", "Kalahari"],
            correct: "c"
        },
        {
            question: "Qual pintor é famoso pela obra 'Noite Estrelada'?",
            options: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Leonardo da Vinci"],
            correct: "b"
        },
        {
            question: "Qual é a moeda oficial do Reino Unido?",
            options: ["Euro", "Dólar", "Libra Esterlina", "Iene"],
            correct: "c"
        },
        {
            question: "Qual é o maior mamífero terrestre?",
            options: ["Elefante", "Rinoceronte", "Girafa", "Baleia Azul"],
            correct: "d"
        },
        {
            question: "Quem foi o primeiro homem a pisar na Lua?",
            options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "John Glenn"],
            correct: "c"
        },
        {
            question: "Qual é o rio mais longo do mundo?",
            options: ["Nilo", "Amazonas", "Yangtzé", "Mississipi"],
            correct: "a"
        },
        {
            question: "Qual é a capital da Austrália?",
            options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
            correct: "c"
        },
        {
            question: "Qual filósofo é conhecido por dizer 'Penso, logo existo'?",
            options: ["Platão", "Aristóteles", "René Descartes", "Immanuel Kant"],
            correct: "c"
        },
        {
            question: "Qual é o maior oceano do planeta?",
            options: ["Atlântico", "Índico", "Ártico", "Pacífico"],
            correct: "d"
        },
        {
            question: "Qual esporte é conhecido como 'o jogo bonito'?",
            options: ["Basquete", "Futebol", "Tênis", "Beisebol"],
            correct: "b"
        },
        {
            question: "Qual é o nome do vulcão que destruiu Pompeia?",
            options: ["Etna", "Vesúvio", "Kilimanjaro", "Fuji"],
            correct: "b"
        },
        {
            question: "Qual é a língua oficial do Brasil?",
            options: ["Espanhol", "Inglês", "Português", "Francês"],
            correct: "c"
        },
        {
            question: "Qual cientista descobriu a lei da gravidade?",
            options: ["Albert Einstein", "Isaac Newton", "Galileu Galilei", "Nikola Tesla"],
            correct: "b"
        },
        {
            question: "Qual é o maior continente em área?",
            options: ["África", "Ásia", "Austrália", "América do Sul"],
            correct: "b"
        },
        {
            question: "Qual é o nome da famosa estátua no Rio de Janeiro?",
            options: ["Estátua da Liberdade", "Cristo Redentor", "Big Ben", "Torre Eiffel"],
            correct: "b"
        }
    ];

    const shuffledQuestions = shuffleArray([...questions]);
    const form = document.getElementById('quiz-form');
    shuffledQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `<h3>${index + 1}. ${q.question}</h3>`;
        q.options.forEach((option, i) => {
            const optionLetter = String.fromCharCode(97 + i);
            questionDiv.innerHTML += `
                <label>
                    <input type="radio" name="q${index + 1}" value="${optionLetter}">
                    ${option}
                </label>
            `;
        });
        form.appendChild(questionDiv);
    });

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Enviar Respostas';
    form.appendChild(submitButton);

    return shuffledQuestions;
}

const questions = generateQuiz();

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