import React, { useState } from 'react'
import { postBlog } from '../services/blogs.service'

const BlogForm = ({ refreshBlogs, newMessage }) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')

    const createNewBlog = async () => {
        const token = JSON.parse(window.localStorage.getItem('loggedAppUser')).data.token
        const newBlog = await postBlog({ title, author, url }, token)
        if (newBlog) {
            refreshBlogs(newBlog.data)
            newMessage({ success: 'new blog created' })
        } else {
            newMessage({ error: 'failed to create a new blog' })
        }
    }
    return (
        <>
            <div>
                title: <input onChange={({ target }) => setTitle(target.value)}></input>
            </div>
            <div>
                author: <input onChange={({ target }) => setAuthor(target.value)}></input>
            </div>
            <div>
                url: <input onChange={({ target }) => setUrl(target.value)}></input>
            </div>
            <button onClick={createNewBlog}>create blog</button>
        </>
    )
}

export default BlogForm