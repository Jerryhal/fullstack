const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', async (request, response) => {
    Blog.find({}).then(blogs => {
        response.json(blogs.map(blog => blog.toJSON()))
    })
})

blogsRouter.get('/:id', async (request, response) => {
    Blog.findById(request.params.id).then(blog => {
        if (blog) {
            response.json(blog.toJSON())
        } else {
            response.status(404).end()
        }
    })
})

blogsRouter.post('/', async (request, response) => {
    const content = request.body
    if (!content) {
        return response.status(400).json({
            error: 'content missing'
        })
    }
    if (!content.author || !content.title) {
        return response.status(400).json({
            error: 'author or title missing'
        })
    }

    const newBlog = new Blog({
        author: content.author,
        title: content.title,
        url: content.url,
        likes: content.likes,
    })
    
    newBlog.save()
        .then(savedBlog => {
            response.json(savedBlog.toJSON())
        })
        .catch(error => response.status(400).json({ error })
        )
})
module.exports = blogsRouter