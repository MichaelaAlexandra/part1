import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
    const [clicks, setClicks] = useState({
        good: 0, neutral: 0, bad: 0, all: 0, score: 0
    })
    
    const handleGoodClick = () =>
        setClicks({...clicks, good: clicks.good + 1, all: clicks.all + 1, score: clicks.score +1})

    const handleNeutralClick = () => 
        setClicks({...clicks, neutral: clicks.neutral +1, all: clicks.all + 1})

    const handleBadClick = () =>
        setClicks({...clicks, bad: clicks.bad +1, all: clicks.all + 1, score: clicks.score -1})

    const averageScore = () => (clicks.score / clicks.all) * 1.0

    const percentagePositive = () => (clicks.good / clicks.all) * 100
    

        
    return (
        <div>
            <h2>give feedback</h2>
            <button onClick={handleGoodClick}>
                good
            </button>
            <button onClick={handleNeutralClick}>
                neutral
            </button>
            <button onClick={handleBadClick}>
                bad
            </button>
            <br />
            <h2>statistics</h2>
            <p>good {clicks.good}</p>
            <p>neutral {clicks.neutral}</p>
            <p>bad {clicks.bad}</p>
            <p>all {clicks.all}</p>
            <p>average {averageScore()}</p>
            <p>positive {percentagePositive()} %</p>
        </div>
    )
}

ReactDOM.render(
    <App />, 
    document.getElementById('root')
)