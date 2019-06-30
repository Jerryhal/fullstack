const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
mongoose.set('useFindAndModify', false)

const blogSchema = new mongoose.Schema({
  author: { type: String, unique: true, minlength: 3 },
  title: { type: String, minlength: 3 },
  url: { type: String },
  likes: { type: Number }
})

blogSchema.plugin(uniqueValidator);

blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})
module.exports = mongoose.model('Blogö', blogSchema)