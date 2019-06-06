import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistics = (props) => {
    console.log(props)
    return (
        <div>
            <h2>statistics</h2>
            <p>good {props.good}</p>
            <p>neutral {props.neutral}</p>
            <p>bad {props.bad}</p>
            <p>all {props.allClicks}</p>
            <p>average {props.average}</p>
            <p>positive {props.positive} %</p>
        </div>
        
        
    )
}


const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [allClicks, setAll] = useState(0)
    const [score, setScore] = useState(0)

    const handleGoodClick = () => {
        setAll(allClicks + 1)
        setGood(good + 1)
        setScore(score + 1)
    }

    const handleNeutralClick = () => {
        setAll(allClicks + 1)
        setNeutral(neutral + 1)
    }

    const handleBadClick = () => {
        setAll(allClicks + 1)
        setBad(bad +1)
        setScore(score -1)
    }

    const averageScore = () => {
        return score / allClicks * 1.0
    }

    const percentagePositive = () => {
        return good / allClicks * 100.0
    }

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
            <Statistics good={good} neutral={neutral} bad={bad}
                allClicks={allClicks} average={averageScore()} positive={percentagePositive()} />
        </div>
    )
}

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);


