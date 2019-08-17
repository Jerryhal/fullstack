import React, { useState, useEffect } from 'react';
import getAll from '../services/blogs.service'
const Blog = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    setBlogs(getAll())
  }, [])
  if (blogs.length && blogs.length > 0) {
    return (
      <>
        <h2>blogs</h2>
        {blogs.map(blog =>
          <Blog key={blog.id} blog={blog} />
        )}
      </>
    )
  } else {
    return (
      <>No blogs</>
    )
  }
}

export default Blog