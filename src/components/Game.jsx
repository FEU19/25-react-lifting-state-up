import React, { useState } from 'react';

const Game = () => {
    const questions = getQuestions();
    const [currentQuestion, setCurrentQuestion] = useState(1)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [userDecided, setUserDecided] = useState(false)
    const q = questions[currentQuestion - 1];

    const handleUserDecided = () => {
        setUserDecided(true);
        setTimeout(() => {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
            setUserDecided(false);
        }, 2000);
    }

    const options = q.answers.map((answer, index) => (
        <p className={"option" + ((userDecided && index === q.correct) ? ' correct' : '')} key={answer}>
            <label>
                <input type="radio" name="question"
                    disabled={userDecided}
                    onClick={() => setSelectedAnswer(index)} />
                {answer}
            </label>
        </p>
    ))
    return (
        <section className="game">
            <h2>Question {currentQuestion} of {questions.length}</h2>
            <h3>{q.question}</h3>
            {options}
            <p> <button
                disabled={userDecided}
                onClick={handleUserDecided}> Answer </button> </p>
        </section>
    )
}
// <p className="option"> <label><input type="radio" name="question" /> 80km/h</label> </p>
// <p className="correct"> <label><input type="radio" name="question" /> 55km/h</label> </p>
// <p className="option"> <label><input type="radio" name="question" /> 30km/h</label> </p>

// gruppera element med Fragment <></> eller div

function getQuestions() {
    return [
        {
            question: 'What is the flight speed of a swallow?',
            answers: [ '80km/h', '55km/h', '30km/h' ],
            correct: 1
        },
        {
            question: 'Vem i klassen har bäst kaffemaskin?',
            answers: ['Agustin'],
            correct: 0
        },
        {
            question: 'Vad var det för färg på Napoleons vita häst?',
            answers: ['#000000', '#5EB3B9', '#FFFFFF'],
            correct: 2
        },
        {
            question: 'Which sea creature has three hearts?',
            answers: ['Octopus', 'Whale', 'Jellyfish'],
            correct: 0
        },
        {
            question: 'Vad är bäst?',
            answers: ['Teams', 'Discord', 'slack'],
            correct: 1
        }
    ];
}

export default Game;
