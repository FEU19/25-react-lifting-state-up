import React, { useState } from 'react';
import './App.css';
import Bordered from './components/Bordered';
import Welcome from './components/Welcome';
import Game from './components/Game';
import Result from './components/Result';

function App() {
    const [score, setScore] = useState(0);
    const [currentScreen, setCurrentScreen] = useState('welcome');

    let content = null;
    switch (currentScreen) {
        case 'welcome':
            content = ( <Welcome
                nextScreen={() => setCurrentScreen('game')} /> )
            break;
        case 'game':
            content = ( <Game /> )
        default:
            content = ( <Result score={score} /> )
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
            </main>
        </div>
    );
}

export default App;
