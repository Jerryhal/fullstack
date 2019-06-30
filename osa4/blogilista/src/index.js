import './index.css';
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { getAll, create, remove, put } from './functions/rest.functions'

const App = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        getAll().then(blogs => {
            setBlogs(blogs);
        })
    }, [])
    
    const getBlogs = () => {
        if (blogs && blogs.length && blogs.length > 0)
            return blogs.map((blog, i) =>
                    <li>{blog.author} {blog.title} {blog.url} {blog.likes}</li>
            )
        return 'no blogs'
    }
 
    return (
        <>
            <ul>
                {getBlogs()}
            </ul>
        </>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
