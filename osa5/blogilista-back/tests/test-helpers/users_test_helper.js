const User = require('../../models/user')

const initialUsers = [
  {
    username: 'asdasda',
    name: 'easdasdasdka',
    passwordHash: 'assddegssd3',
    blogs: []
  },
  {
    username: 'eka',
    name: 'eka',
    passwordHash: 'asdawdegsd213',
    blogs: []
  }]

const nonExistingId = async () => {
  const user = new User({ username: 'username', name: 'name' })
  await user.save()
  await user.remove()

  return user._id.toString()
}

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(user => user.toJSON())
}

module.exports = {
  initialUsers, nonExistingId, usersInDb
}