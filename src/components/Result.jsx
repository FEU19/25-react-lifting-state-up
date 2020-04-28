import React from 'react';

const Result = ({ score, restartQuiz }) => (
    <section>
        <h2>Result</h2>
        <p> You got {score} correct answers! </p>
        <p> <button onClick={restartQuiz}>Let me try again</button> </p>
    </section>
)

export default Result;
