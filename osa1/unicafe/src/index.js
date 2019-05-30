import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({ text, statistic }) => {
    return (
        <>
            <div>
                {text} {statistic}
            </div>
        </>
    )
}

const Statistics = ({ good, neutral, bad }) => {
    const getMean = () => (good + (-1 * bad)) / (good + bad + neutral)
    const getPositives = () => 100 * (good / (good + bad + neutral)) + '%'
    if ((good + bad + neutral) > 0)
        return (
            <>
                <h1>statistiikka</h1>
                <Statistic text='hyvä' statistic={good} />
                <Statistic text='neutraali' statistic={neutral} />
                <Statistic text='paha' statistic={bad} />
                <Statistic text='yhteensä' statistic={good + bad + neutral} />
                <Statistic text='keskiarvo' statistic={getMean()} />
                <Statistic text='positiivisia' statistic={getPositives()} />
            </>
        )
    return (
        <>
            <h1>statistiikka</h1>
            <div>Ei yhtään palautetta annettu</div>
        </>
    )
}

const Button = (props) => {
    return (
        <>
            <button onClick={props.func}>
                {props.text}
            </button>
        </>
    )
}

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)


    return (
        <div>
            <h1>anna palautettaa</h1>
            <div>
                <Button func={() => setGood(good + 1)} text='hyvä' />
                <Button func={() => setNeutral(neutral + 1)} text='neutraali' />
                <Button func={() => setBad(bad + 1)} text='huono' />
            </div>
            <Statistics bad={bad} neutral={neutral} good={good} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)