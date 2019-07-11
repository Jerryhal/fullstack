const mongoose = require('mongoose')
const Blog = require('../models/blog')
const supertest = require('supertest')
const app = require('../app')


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

const api = supertest(app)
test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('all blogs are returned', async () => {
  const response = await api.get('/api/blogs')

  expect(response.body.length).toBe(initialBlogs.length)
})

test('a specific blog is within the returned blogs', async () => {
  const response = await api.get('/api/blogs')

  const authors = response.body.map(r => r.author)

  expect(authors).toContain(
    'testi'
  )
})

beforeEach(async () => {
  await Blog.deleteMany({})

  let blogObject = new Blog(initialBlogs[0])
  await blogObject.save()

  blogObject = new Blog(initialBlogs[1])
  await blogObject.save()
})

afterAll(() => {
  mongoose.connection.close()
})