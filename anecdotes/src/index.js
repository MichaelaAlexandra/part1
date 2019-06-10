import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
    const [selected, setSelected] = useState(anecdotes.indexOf(props.anecdotes))
    const [votes, setVotes] = useState(Array.from(Array(anecdotes.length), () => 0))
    const [mostVotes, setMostVotes] = useState(selected)

    console.log(selected)
    console.log(votes)
    console.log(mostVotes)

    const setToSelected = (value) => setSelected(value)

    const handleVote = () => {
        const votesNew = [...votes]
        votesNew[selected] += 1

        const numbers = [...votesNew]
        const highestNumber = Math.max(...numbers)
        const anecdoteWithMostVotes = votesNew.indexOf(highestNumber)

        setVotes(votesNew)
        setMostVotes(anecdoteWithMostVotes)
        console.log(anecdoteWithMostVotes)
    }





    return (
        <div>
            <h2>Anecdote of the day</h2>
            <p>{anecdotes[selected]}</p>
            <p>has {votes[selected]} votes</p>
            <button onClick={() => handleVote()}>vote</button>
            <button onClick={() => setToSelected(Math.floor(Math.random() * anecdotes.length))}>next anecdote</button>
            <br />
            <h2>Anecdote with most votes</h2>
            <p>{anecdotes[mostVotes]}</p>
            <p>has {votes[mostVotes]} votes</p>

        </div>
    )
}


const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes[Math.floor(Math.random() * anecdotes.length)]} />,
    document.getElementById('root')
)


