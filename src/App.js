import React, { useState } from 'react';
import './App.css';
import Bordered from './components/Bordered';
import Welcome from './components/Welcome';
import Game from './components/Game';
import Result from './components/Result';

function App() {
    const WELCOME = 'welcome', GAME = 'game', RESULT = 'result';
    const [score, setScore] = useState(0);
    const [currentScreen, setCurrentScreen] = useState(WELCOME);

    const restartQuiz = () => {
        setCurrentScreen(GAME);
        setScore(0);
    }
    let content = null;
    switch (currentScreen) {
        case WELCOME:
            content = ( <Welcome
                nextScreen={() => setCurrentScreen(GAME)} /> )
            break;
        case GAME:
            content = ( <Game
                answeredCorrectly={() => setScore(score + 1)}
                showResults={() => setCurrentScreen(RESULT)} /> )
            break;
        default:
            content = ( <Result
                score={score}
                restartQuiz={restartQuiz} /> )
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Quiz time</h1>
            </header>
            <main>
                <Bordered>
                    {content}
                </Bordered>

                Score: {score}
            </main>
        </div>
    );
}

export default App;
