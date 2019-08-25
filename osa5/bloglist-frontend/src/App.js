import React, { useState, useEffect } from 'react'
import Login from './components/Login.component'
import Blog from './components/Blog.component'
import Message from './components/messages'

const App = () => {
  const [message, setMessage] = useState({})
  const [user, setUser] = useState(null)
  const logout = () => {
    setUser(null)
    window.localStorage.removeItem('loggedAppUser')

  }
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON !== 'undefined') {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    }
  }, [])
  const newMessage = (message) => {
    setMessage(message)
    setTimeout(() => {
      setMessage({})
    }, 3000)
  }
  return (
    <>
      <Message message={message} />
      {user === null ? <Login setUser={setUser} newMessage={newMessage} />
        : <><button onClick={() => logout()}>log out</button>
          <Blog newMessage={newMessage} /></>}
    </>
  )
}

export default App
