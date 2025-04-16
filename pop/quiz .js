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
            question: "Qual banda lançou o álbum 'Abbey Road' em 1969?",
            options: ["The Rolling Stones", "The Beatles", "Led Zeppelin", "Pink Floyd"],
            correct: "b"
        },
        {
            question: "Quem interpretou Tony Stark no Universo Cinematográfico Marvel?",
            options: ["Chris Hemsworth", "Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
            correct: "b"
        },
        {
            question: "Qual série é conhecida pela frase 'Winter is Coming'?",
            options: ["The Witcher", "Game of Thrones", "Vikings", "Stranger Things"],
            correct: "b"
        },
        {
            question: "Qual filme ganhou o Oscar de Melhor Filme em 1994?",
            options: ["Pulp Fiction", "Forrest Gump", "The Shawshank Redemption", "Jurassic Park"],
            correct: "b"
        },
        {
            question: "Quem cantou 'Like a Virgin' na década de 1980?",
            options: ["Cyndi Lauper", "Madonna", "Whitney Houston", "Tina Turner"],
            correct: "b"
        },
        {
            question: "Qual é o nome do assistente de Tony Stark em 'Homem de Ferro'?",
            options: ["JARVIS", "FRIDAY", "ULTRON", "VISION"],
            correct: "a"
        },
        {
            question: "Qual franquia de filmes inclui o personagem Darth Vader?",
            options: ["Star Trek", "Star Wars", "Guardiões da Galáxia", "Duna"],
            correct: "b"
        },
        {
            question: "Quem dirigiu o filme 'Titanic' de 1997?",
            options: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Quentin Tarantino"],
            correct: "b"
        },
        {
            question: "Qual série da Netflix se passa em Hawkins, Indiana?",
            options: ["The Umbrella Academy", "Stranger Things", "Dark", "Ozark"],
            correct: "b"
        },
        {
            question: "Qual cantor é conhecido como 'Rei do Pop'?",
            options: ["Elvis Presley", "Michael Jackson", "Prince", "Justin Bieber"],
            correct: "b"
        },
        {
            question: "Qual filme de animação da Disney apresenta a música 'Let It Go'?",
            options: ["Moana", "Frozen", "Zootopia", "Encanto"],
            correct: "b"
        },
        {
            question: "Quem interpretou o Coringa em 'O Cavaleiro das Trevas'?",
            options: ["Joaquin Phoenix", "Heath Ledger", "Jared Leto", "Jack Nicholson"],
            correct: "b"
        },
        {
            question: "Qual boy band lançou o hit 'I Want It That Way'?",
            options: ["NSYNC", "Backstreet Boys", "One Direction", "New Kids on the Block"],
            correct: "b"
        },
        {
            question: "Qual reality show tem o bordão 'You're fired'?",
            options: ["Survivor", "The Apprentice", "Big Brother", "American Idol"],
            correct: "b"
        },
        {
            question: "Qual série de TV apresenta a família Simpson?",
            options: ["Family Guy", "South Park", "The Simpsons", "Futurama"],
            correct: "c"
        },
        {
            question: "Qual cantor lançou o álbum 'Thriller' em 1982?",
            options: ["David Bowie", "Michael Jackson", "Bruce Springsteen", "Lionel Richie"],
            correct: "b"
        },
        {
            question: "Qual filme de 2019 é baseado em um vilão da DC Comics?",
            options: ["Coringa", "Aquaman", "Shazam!", "Aves de Rapina"],
            correct: "a"
        },
        {
            question: "Qual série é baseada nos livros de George R.R. Martin?",
            options: ["The Witcher", "Game of Thrones", "His Dark Materials", "Shadow and Bone"],
            correct: "b"
        },
        {
            question: "Qual banda de rock lançou 'Smells Like Teen Spirit'?",
            options: ["Nirvana", "Pearl Jam", "Soundgarden", "Alice in Chains"],
            correct: "a"
        },
        {
            question: "Qual franquia de videogame inspirou um filme com Sonic?",
            options: ["Mario", "Sonic the Hedgehog", "Pokémon", "Zelda"],
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