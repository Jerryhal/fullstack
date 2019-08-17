const bcrypt = require('bcrypt')
const User = require('../models/user')
const usersRouter = require('express').Router()

usersRouter.get('/', async (request, response) => {
  const users = await User.find({}).populate('blogs');

  response.json(users.map(u => u.toJSON()))
})

usersRouter.post('/', async (request, response, next) => {
  try {
    const body = request.body
    if (body.password.length >= 3 && body.username.length >= 3) {
      const usernameTaken = await User.find({ username: body.username }).length;
      if (!usernameTaken) {
        const saltRounds = 10
        const passwordHash = await bcrypt.hash(body.password, saltRounds)

        const user = new User({
          username: body.username,
          name: body.name,
          passwordHash,
        })
        const savedUser = await user.save()
        response.json(savedUser)

      } else {
        return response.status(400).json({
          error: 'Username is already taken'
        })
      }
    } else {
      return response.status(400).json({
        error: 'Username and password must be longer than 3 characters'
      })
    }
  } catch (exception) {
    next(exception)
  }
})

module.exports = usersRouter