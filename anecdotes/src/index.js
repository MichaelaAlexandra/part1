import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
    const [selected, setSelected] = useState(anecdotes.indexOf(props.anecdotes))
    const [votes, setVotes] = useState(Array.from(Array(anecdotes.length), () => 0))
    
    console.log(selected)
    console.log(votes)

    const setToSelected = (value) => setSelected(value)

    const handleVote = () => {
        const votesNew = [...votes] 
        votesNew[selected] += 1

        setVotes(votesNew)
    }

    return (
        <div>
            <p>{anecdotes[selected]}</p>
            <p>has {votes[selected]} votes</p>
            <button onClick={() => handleVote()}>vote</button>
            <button onClick={() => setToSelected(Math.floor(Math.random() * anecdotes.length))}>next anecdote</button>
        </div>
    )
}


const anecdotes = [
    'I have always found that plans are useless, but planning is indispensable.',
    'Software and cathedrals are much the same - first we build them, then we pray.',
    'If debugging is the process of removing bugs, then programming must be the process of putting them in. ',
    'If at first you do not succeed, call it version 1.0',
    'In a room full of top software designers, if two agree on the same thing, that is a majority.',
    'When to use iterative development? You should use iterative development only on projects that you want to succeed.'
]

ReactDOM.render(
    <App anecdotes={anecdotes[Math.floor(Math.random() * anecdotes.length)]}/>,
    document.getElementById('root')
)


