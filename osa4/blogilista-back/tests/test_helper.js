const Blog = require('../models/blog')

const initialBlogs = [
    {
      author: 'testi',
      title: 'testi',
      url: 'testi',
      likes: 1,
    },
    {
      author: 'aaaa',
      title: 'bbbbb',
      url: 'ccccc',
      likes: 2,
    },
  ]

const nonExistingId = async () => {
  const blog = new Note({ author: 'a' })
  await blog.save()
  await blog.remove()

  return blog._id.toString()
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

module.exports = {
    initialBlogs, nonExistingId, blogsInDb
}