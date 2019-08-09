const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')

const jwt = require('jsonwebtoken')

const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7)
    }
    return null
}

blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({}).populate('user');
    response.json(blogs.map(blog => {
        return blog.toJSON()
    }))
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
    const token = getTokenFrom(request)

    try {
        const decodedToken = jwt.verify(token, process.env.SECRET)
        if (!token || !decodedToken.id) {
            return response.status(401).json({ error: 'token missing or invalid' })
        }

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

        const user = await User.findById(decodedToken.id)
        const newBlog = new Blog({
            author: content.author,
            title: content.title,
            url: content.url,
            likes: content.likes,
            user: user._id
        })

        const savedBlog = await newBlog.save()
        user.blogs = user.blogs.concat(savedBlog._id)
        await user.save()
        response.json(savedBlog.toJSON())
    } catch (error) {
        response.status(400).json({ error })
    }
})

blogsRouter.delete('/:id', async (request, response) => {
    const token = getTokenFrom(request)
    try {
        const decodedToken = jwt.verify(token, process.env.SECRET)
        if (!token || !decodedToken.id) {
            return response.status(401).json({ error: 'token missing or invalid' })
        }
        const user = await User.findById(decodedToken.id)
        const blog = await Blog.findById(request.params.id)
        if (blog.user.toString() === user._id.toString()) {
            await Blog.deleteOne({ _id: request.params.id })
            response.status(204).end()
        }
    } catch (error) {
        response.status(404).json({ error })
    }
})

blogsRouter.put('/:id', async (request, response) => {
    const content = request.body

    try {
        const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, { likes: content.likes }, { new: true })
        response.json(updatedBlog.toJSON())
    } catch (error) {
        response.status(400).json({ error })
    }
})


module.exports = blogsRouter