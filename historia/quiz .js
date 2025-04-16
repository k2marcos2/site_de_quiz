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
            question: "Em que ano ocorreu a queda da Bastilha, marcando o início da Revolução Francesa?",
            options: ["1776", "1789", "1799", "1804"],
            correct: "b"
        },
        {
            question: "Quem foi o primeiro imperador do Brasil?",
            options: ["Dom Pedro I", "Dom Pedro II", "Dom João VI", "Dom Afonso"],
            correct: "a"
        },
        {
            question: "Qual civilização construiu as pirâmides de Gizé?",
            options: ["Maia", "Inca", "Egípcia", "Mesopotâmica"],
            correct: "c"
        },
        {
            question: "Qual guerra terminou com o Tratado de Versalhes em 1919?",
            options: ["Primeira Guerra Mundial", "Segunda Guerra Mundial", "Guerra dos Cem Anos", "Guerra Fria"],
            correct: "a"
        },
        {
            question: "Quem liderou a independência da Índia contra o domínio britânico?",
            options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Indira Gandhi"],
            correct: "b"
        },
        {
            question: "Qual era o nome da capital do Império Romano?",
            options: ["Atenas", "Constantinopla", "Roma", "Alexandria"],
            correct: "c"
        },
        {
            question: "Em que século ocorreu a Peste Negra na Europa?",
            options: ["Século XII", "Século XIII", "Século XIV", "Século XV"],
            correct: "c"
        },
        {
            question: "Quem foi o líder da Revolução Russa de 1917?",
            options: ["Joseph Stalin", "Vladimir Lenin", "Leon Trotsky", "Nikolai II"],
            correct: "b"
        },
        {
            question: "Qual evento marcou o início da Segunda Guerra Mundial?",
            options: ["Invasão da Polônia", "Ataque a Pearl Harbor", "Batalha de Stalingrado", "Queda de Berlim"],
            correct: "a"
        },
        {
            question: "Qual rainha inglesa reinou por mais de 60 anos no século XIX?",
            options: ["Rainha Elizabeth I", "Rainha Victoria", "Rainha Anne", "Rainha Mary"],
            correct: "b"
        },
        {
            question: "Qual foi a primeira civilização a usar a escrita cuneiforme?",
            options: ["Sumérios", "Egípcios", "Chineses", "Indus"],
            correct: "a"
        },
        {
            question: "Em que ano Cristóvão Colombo chegou à América?",
            options: ["1453", "1492", "1519", "1607"],
            correct: "b"
        },
        {
            question: "Qual império foi derrotado na Batalha de Waterloo?",
            options: ["Império Otomano", "Império Napoleônico", "Império Austríaco", "Império Russo"],
            correct: "b"
        },
        {
            question: "Quem foi o faraó famoso por sua tumba intacta descoberta em 1922?",
            options: ["Ramsés II", "Cleópatra", "Tutancâmon", "Aquenáton"],
            correct: "c"
        },
        {
            question: "Qual documento marcou a independência dos Estados Unidos em 1776?",
            options: ["Magna Carta", "Declaração de Independência", "Constituição", "Tratado de Paris"],
            correct: "b"
        },
        {
            question: "Qual cidade foi destruída pelo Vesúvio em 79 d.C.?",
            options: ["Roma", "Pompeia", "Atenas", "Cartago"],
            correct: "b"
        },
        {
            question: "Quem foi o último czar da Rússia?",
            options: ["Pedro, o Grande", "Alexandre II", "Nicolau II", "Ivan IV"],
            correct: "c"
        },
        {
            question: "Qual guerra envolveu a Batalha de Trafalgar?",
            options: ["Guerras Napoleônicas", "Guerra dos Cem Anos", "Primeira Guerra Mundial", "Guerra Civil Americana"],
            correct: "a"
        },
        {
            question: "Qual filósofo escreveu 'O Príncipe' no século XVI?",
            options: ["Maquiavel", "Rousseau", "Locke", "Montesquieu"],
            correct: "a"
        },
        {
            question: "Qual evento histórico é conhecido como 'Queda do Muro de Berlim'?",
            options: ["1961", "1989", "1991", "2001"],
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