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
            question: "Qual é o elemento químico mais abundante na crosta terrestre?",
            options: ["Ferro", "Oxigênio", "Silício", "Alumínio"],
            correct: "b"
        },
        {
            question: "Qual planeta é conhecido como o 'Planeta Vermelho'?",
            options: ["Júpiter", "Marte", "Vênus", "Mercúrio"],
            correct: "b"
        },
        {
            question: "Qual é a fórmula química da água?",
            options: ["CO2", "H2O", "O2", "H2SO4"],
            correct: "b"
        },
        {
            question: "Quem propôs a teoria da relatividade?",
            options: ["Isaac Newton", "Albert Einstein", "Galileu Galilei", "Stephen Hawking"],
            correct: "b"
        },
        {
            question: "Qual é a unidade de medida da força no Sistema Internacional?",
            options: ["Joule", "Watt", "Newton", "Pascal"],
            correct: "c"
        },
        {
            question: "Qual gás é o principal responsável pelo efeito estufa?",
            options: ["Oxigênio", "Nitrogênio", "Dióxido de carbono", "Hélio"],
            correct: "c"
        },
        {
            question: "Qual é o maior osso do corpo humano?",
            options: ["Crânio", "Fêmur", "Tíbia", "Úmero"],
            correct: "b"
        },
        {
            question: "Qual é a velocidade da luz no vácuo?",
            options: ["300.000 km/s", "150.000 km/s", "450.000 km/s", "600.000 km/s"],
            correct: "a"
        },
        {
            question: "Qual partícula subatômica tem carga negativa?",
            options: ["Próton", "Nêutron", "Elétron", "Quark"],
            correct: "c"
        },
        {
            question: "Qual é o nome do processo pelo qual as plantas produzem energia?",
            options: ["Respiração", "Fotossíntese", "Transpiração", "Fermentação"],
            correct: "b"
        },
        {
            question: "Qual é o maior órgão do corpo humano?",
            options: ["Fígado", "Cérebro", "Pele", "Coração"],
            correct: "c"
        },
        {
            question: "Qual é o nome da tabela que organiza os elementos químicos?",
            options: ["Tabela Periódica", "Tabela Atômica", "Tabela Química", "Tabela de Mendeleev"],
            correct: "a"
        },
        {
            question: "Qual é o principal gás da atmosfera terrestre?",
            options: ["Oxigênio", "Nitrogênio", "Argônio", "Dióxido de carbono"],
            correct: "b"
        },
        {
            question: "Qual cientista descobriu a penicilina?",
            options: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Robert Koch"],
            correct: "b"
        },
        {
            question: "Qual é o nome da força que mantém os planetas em órbita?",
            options: ["Eletromagnetismo", "Gravidade", "Força nuclear forte", "Força nuclear fraca"],
            correct: "b"
        },
        {
            question: "Qual é o pH de uma solução neutra?",
            options: ["0", "7", "14", "10"],
            correct: "b"
        },
        {
            question: "Qual é o nome do primeiro satélite artificial lançado ao espaço?",
            options: ["Sputnik", "Apollo", "Voyager", "Hubble"],
            correct: "a"
        },
        {
            question: "Qual é o ramo da ciência que estuda os fósseis?",
            options: ["Geologia", "Paleontologia", "Arqueologia", "Antropologia"],
            correct: "b"
        },
        {
            question: "Qual é o nome da molécula que carrega o código genético?",
            options: ["RNA", "DNA", "ATP", "Proteína"],
            correct: "b"
        },
        {
            question: "Qual é o maior tipo de célula no corpo humano?",
            options: ["Neurônio", "Célula muscular", "Óvulo", "Célula epitelial"],
            correct: "c"
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