import React, { useState, useEffect } from 'react'
import { getAll, likeBlog, deleteBlog } from '../services/blogs.service'
import BlogForm from './blog-form.component'
import Togglable from './togglable.component'
import PropTypes from 'prop-types'

const Blog = ({ newMessage }) => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    getAll().then(blogs => {
      setBlogs(blogs)
    })
  }, [])
  const refreshBlogs = (newBlog) => {
    setBlogs(blogs.concat(newBlog))
  }
  return (
    (blogs.length && blogs.length > 0) ?
      <>
        <h2>blogs</h2>
        <Togglable buttonLabel='new note'>
          <BlogForm refreshBlogs={refreshBlogs} newMessage={newMessage} />
        </Togglable>
        <Bloglist bloglist={blogs} newMessage={newMessage} />
      </>
      : <>No blogs</>
  )
}

const Bloglist = ({ bloglist, newMessage }) => {
  Bloglist.propTypes = {
    bloglist: PropTypes.array
  }
  const [blogs, setBlogs] = useState(bloglist.sort((a, b) => b.likes - a.likes))
  const [toggledBlogs, toggleBlogs] = useState(new Map())
  const showWhenVisible = (id) => {
    return toggledBlogs.get(id) ? { display: '', outline: '1px dotted' } : { display: 'none' }
  }

  const toggleDetails = (blog) => {
    toggledBlogs.set(blog, !toggledBlogs.get(blog))
    toggleBlogs(new Map(toggledBlogs))
  }

  const like = async (likedBlog) => {
    try {
      const blogLiked = await likeBlog(likedBlog.id, likedBlog.likes + 1)
      if (blogLiked) {
        newMessage({ success: 'blog liked' })
        const unsortedBlogs = blogs.map(blog => blog.id === likedBlog.id ? { ...blog, likes: blog.likes + 1 } : blog)
        setBlogs(unsortedBlogs.sort((a, b) => b.likes - a.likes))
      }
    } catch (e) {
      newMessage({ error: 'blog like failed' })
    }
  }

  const blogDelete = async (blogId) => {
    try {
      if (window.confirm('Do you really want delete this blog?')) {
        const token = JSON.parse(window.localStorage.getItem('loggedAppUser')).data.token
        const blogDeleted = await deleteBlog(blogId, token)
        if (blogDeleted) {
          newMessage({ success: 'blog deleted' })
          setBlogs(blogs.filter(blog => blog.id !== blogId))
        } else {
          newMessage({ error: 'blog delete failed' })
        }
      }
    } catch (e) {
      newMessage({ error: 'blog delete failed' })
    }
  }

  return (
    <ul>
      {blogs.map(blog => {
        return (
          <>
            <li key={blog.id} onClick={() => toggleDetails(blog.id)}>{blog.title}</li>
            <div style={showWhenVisible(blog.id)}>
              <span>{blog.likes} likes <button onClick={() => like(blog)}>like</button></span>
              <p>{blog.author} {blog.url}</p>
              <button onClick={() => blogDelete(blog.id)}>delete blog</button>
            </div>
          </>
        )
      })}
    </ul>
  )
}

export default Blog