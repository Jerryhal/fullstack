const supertest = require('supertest')
const mongoose = require('mongoose')
const helper = require('./test-helpers/users_test_helper')
const app = require('../app')
const api = supertest(app)

const User = require('../models/user')

describe('creating a new user', () => {
    beforeEach(async () => {
        await User.deleteMany({})
    
        const userObjects = helper.initialUsers
          .map(user => new User(user))
        const promiseArray = userObjects.map(user => user.save())
        await Promise.all(promiseArray)
      })
    test('fails with bad data', async () => {
      const newUser = {
        username: "a",
        name: "d",
        password: "x" 
      }

      await api
        .post('/api/users')
        .send(newUser)
        .expect(400)

      const usersAtEnd = await helper.usersInDb()
      expect(usersAtEnd.length).toBe(helper.initialUsers.length)
      const addedUser = usersAtEnd.find(user => user.name === newUser.name)
      expect(addedUser).toBeFalsy()
    })
})
afterAll(() => {
    mongoose.connection.close()
  })