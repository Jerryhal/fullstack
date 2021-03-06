import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const TopVoted = ({TopVotedAnecdote}) => {
    return (
        <div>
            <h1>
                {TopVotedAnecdote.anecdote}
            </h1>
            <div>has votes {TopVotedAnecdote.votes}</div>
        </div>
    )
}

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState([0, 0, 0, 0, 0, 0])
    const getRandomAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length))
    const voteAnecdote = () => {
        const copy = [...points]
        copy[selected] += 1
        setPoints(copy)
    }
    const getTopVotedAnecdote = (anecdotes) => {
        let votes = Math.max(...points)
        let anecdote = anecdotes[points.indexOf(votes)]
        return { anecdote: anecdote, votes: votes }
    }
    return (
        <div>
            <div>
                <h1>
                    {props.anecdotes[selected]}
                </h1>
                <div>has votes {points[selected]}</div>
                <button onClick={getRandomAnecdote}>next anecdote</button>
                <button onClick={voteAnecdote}>vote</button>
            </div>
            <TopVoted TopVotedAnecdote={getTopVotedAnecdote(anecdotes)}/>
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
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)