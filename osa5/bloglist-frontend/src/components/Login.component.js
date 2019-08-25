import { login } from '../services/login.service'
import React, { useState } from 'react'

const Login = ({ setUser, newMessage }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const logIn = async (setUser, newMessage) => {
        const token = await login(username, password)
        if (token) {
            window.localStorage.setItem('loggedAppUser', JSON.stringify(token))
            setUser(JSON.stringify(token))
            newMessage({ success: 'logged in' })
        } else {
            newMessage({ error: 'failed to log in' })
        }
    }

    return (
        <div>
            <h2>Log in to application</h2>
            <form>
                <div>
                    <input onChange={({ target }) => setUsername(target.value)} type="text"></input>
                </div>
                <div>
                    <input onChange={({ target }) => setPassword(target.value)} type="password"></input>
                </div>
            </form>
            <button onClick={() => logIn(setUser, newMessage)}>Login</button>
        </div>
    )
}
export default Login