import React, { useState } from 'react';

const Game = () => {
    const questions = getQuestions();
    const [currentQuestion, setCurrentQuestion] = useState(1)
    const q = questions[currentQuestion - 1];
    const options = q.answers.map(answer => (
        <p className="option" key={answer}>
            <label>
                <input type="radio" name="question" />
                {answer}
            </label>
        </p>
    ))
    return (
        <section className="game">
            <h2>Question {currentQuestion} of {questions.length}</h2>
            <h3>{q.question}</h3>
            {options}
            <p> <button> Answer </button> </p>
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
        }
    ];
}

export default Game;
