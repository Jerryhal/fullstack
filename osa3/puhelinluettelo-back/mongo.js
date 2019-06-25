const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)
if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}
const password = process.argv[2]
const url =
  `mongodb+srv://fullstack:${password}@cluster0-gharm.mongodb.net/phonebook-app?retryWrites=true&w=majority`
mongoose.connect(url, { useNewUrlParser: true })

const contactSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Contact = mongoose.model('Contact', contactSchema)

if (process.argv.length === 3) {
  Contact.find({}).then(result => {
    result.forEach(contact => {
      console.log(contact)
    })
    mongoose.connection.close()
    process.exit(1)
  })
} else {
  const name = process.argv[3]
  const number = process.argv[4]


  const contact = new Contact({
    name,
    number
  })

  contact.save().then(response => {
    console.log(`lisätään ${name} numero ${number} luetteloon`);
    mongoose.connection.close()
    process.exit(1)
  })
}
