import React from 'react';
import './App.css';
import Bordered from './components/Bordered';
import Welcome from './components/Welcome';
import Game from './components/Game';
import Result from './components/Result';

function App() {
    // questions: [{ question, possible answers, which is correct }]
    // score
    return (
        <div className="App">
            <header className="App-header">
                <h1>Quiz time</h1>
            </header>
            <main>
                <Bordered>
                    <Welcome />
                </Bordered>

                <Bordered>
                    <Game />
                </Bordered>

                <Bordered>
                    <Result />
                </Bordered>
            </main>
        </div>
    );
}

export default App;
