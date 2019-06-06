import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistic = ({ text, value }) => {
    if (text === "positive") {
        return (
            <div>
                <p>{text} {value} %</p>
            </div>
        )
    }
    return (
        <div>
            <p>{text} {value}</p>
        </div>
    )

}

const Statistics = (props) => {
    const good = props.good
    const neutral = props.neutral
    const bad = props.bad
    const allClicks = props.allClicks
    const average = props.average.toFixed(1)
    const positive = props.positive.toFixed(1)

    

    console.log(props)

    if (props.allClicks === 0) {
        return (
            <div>
                <p>No feedback given</p>
            </div>
        )
    }
    return (
        <div>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <Statistic text="all" value={allClicks} />
            <Statistic text="average" value={average} />
            <Statistic text="positive" value={positive} />
            
        </div>
        
        
    )
}

/*
            <h2>statistics</h2>
            <p>good {props.good}</p>
            <p>neutral {props.neutral}</p>
            <p>bad {props.bad}</p>
            <p>all {props.allClicks}</p>
            <p>average {props.average}</p>
            <p>positive {props.positive} %</p>
*/


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
        return score / allClicks 
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
            <h2>statistics</h2>
            <Statistics good={good} neutral={neutral} bad={bad}
                allClicks={allClicks} average={averageScore()} positive={percentagePositive()} />
        </div>
    )
}

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);


