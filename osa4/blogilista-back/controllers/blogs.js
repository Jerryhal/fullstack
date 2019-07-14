const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({})
    response.json(blogs.map(blog => blog.toJSON()))
})

blogsRouter.get('/:id', async (request, response) => {
    try {
        const blog = await Blog.findById(request.params.id)
        response.json(blog.toJSON())
    } catch (error) {
        response.status(404).end()
    }
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

    try {
        const savedBlog = await newBlog.save()
        response.json(savedBlog.toJSON())
    } catch (error) {
        response.status(400).json({ error })
    }
})

blogsRouter.delete('/:id', async (request, response) => {
    try {
        await Blog.deleteOne({ _id: request.params.id })
        response.status(204).end()
    } catch (error) {
        response.status(404).end()
    }
})

blogsRouter.put('/:id', async (request, response) => {
    const content = request.body

    try {
        const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, {likes: content.likes}, { new: true })
        response.json(updatedBlog.toJSON())
    } catch (error) {
        response.status(400).json({ error })
    }

})

module.exports = blogsRouter