import React from 'react';

const Welcome = ({ nextScreen }) => (
    <section>
        <h2>Welcome to quiz time!</h2>
        <p>Do you want to start a new quiz?</p>
        <button onClick={nextScreen}>Yes, please. I will crush this quiz!!</button>
    </section>
)

export default Welcome;
