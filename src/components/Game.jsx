import React from 'react';

const Game = () => (
    <section>
        <h2>Question 1 of 4</h2>
        <h3>What is the flight speed of a swallow?</h3>
        <p> <label><input type="radio" name="question" /> 80km/h</label> </p>
        <p> <label><input type="radio" name="question" /> 55km/h</label> </p>
        <p> <label><input type="radio" name="question" /> 30km/h</label> </p>
        <p> <button> Answer </button> </p>
    </section>
)

// gruppera element med Fragment <></> eller div

export default Game;
