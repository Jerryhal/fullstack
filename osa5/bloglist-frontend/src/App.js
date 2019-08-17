import React, { useState, useEffect } from 'react';
import Login from './components/Login.component'
import Blog from './components/Blog.component'
const App = () => {
  
  const [user, setUser] = useState(null)
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON !== 'undefined') {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    }
  }, [])
  return (
    user === null ?
      <Login setUser={setUser}/> :
      <Blog />
  )
}

export default App;
