import readline from "readline";

interface Question {
    question: string;
    answers: [string, string, string, string],
    correctAnswerIndex: number
}

const questions: Question[] = [
    {
        question: 'Wie viele Lichtminuten ist die Sonne weg?',
        answers: ['1', '3', '6', '8'],
        correctAnswerIndex: 3
    },
    {
        question: 'Wie viele Tiere gibt es bei den Bremer Stadtmusikanten?',
        answers: ['1', '4', '6', '8'],
        correctAnswerIndex: 1
    },
    {
        question: 'Wie heißt die Hauptstadt Deutschlands?',
        answers: ['Hamburg', 'Ahlen', 'Berlin', 'Hamm'],
        correctAnswerIndex: 2
    },
    {
        question: 'Welchen Umfang hat die Erde am Äquator?',
        answers: ['1000 Kilometer', '3000 Kilometer', '40000 Kilometer', '800000 Kilometer'],
        correctAnswerIndex: 2
    },
    {
        question: 'Welche Hunderasse gehört zu den asiatischen Spitzen?',
        answers: ['Corgi', 'Shiba Inu', 'Kangale', 'Schäferhund'],
        correctAnswerIndex: 1
    },
    {
        question: 'Wie hoch ist der Eifelturm?',
        answers: ['1 Meter', '3 Meter', '6 Meter', '340 Meter'],
        correctAnswerIndex: 3
    },
    {
        question: 'Wer ist der derzeitige Schachweltmeister?',
        answers: ['Maxime Vachiere-Lagrave', 'Alireza Firouzja', 'Anish Giri', 'Magnus Carlsen'],
        correctAnswerIndex: 3
    },
    {
        question: 'Was macht einen guten Programmierer aus?',
        answers: ['Bizepsumfang', 'Disziplin', 'Intelligenz', 'Abstraktionsvermögen'],
        correctAnswerIndex: 0
    },
    {
        question: 'Welches Objekt ist am dichtesten?',
        answers: ['Gasplanet', 'Gesteinsplanet', 'Neutronenstern', 'Kiffer'],
        correctAnswerIndex: 3
    },
    {
        question: 'Welches Land hat die meisten Soldaten?',
        answers: ['USA', 'Deutschland', 'China', 'Nordkorea'],
        correctAnswerIndex: 3
    },
]


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on("close", function () {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});
const askQuestion = (question: string) => new Promise<string>(resolve => rl.question(question, resolve));

async function quiz() {
    for (const question of questions) {
        console.log(question.question);
        let i = 0;
        for (const answer of question.answers)
        {
            console.log( String.fromCharCode(97 + i) + ') ' + answer);
            i++;
        }

        const answer = await askQuestion("Richtige Antwort hier eingeben: ");
        if (answer === String.fromCharCode(97 + question.correctAnswerIndex)) {
            console.log('Richtig 🎉')
        }
        else {
            console.log('Falsch ;(')
        }
        console.log("\n\n")
    }

    rl.close()

}

quiz();
