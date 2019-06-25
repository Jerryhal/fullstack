require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const Contact = require('./models/contact')
app.use(express.static('build'))
app.use(cors())
app.use(bodyParser.json())
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
app.get('/api/persons/', (request, response) => {
    Contact.find({}).then(contacts => {
        response.json(contacts.map(contact => contact.toJSON()))
    })
})

app.get('/api/info/', (request, response) => {
    let responseString = `<div>Puhelinluettelossa on ${persons.length} henkilön tiedot</div>`
    responseString += `<div>${String(new Date())}</div>`
    response.send(responseString)
})


app.get('/api/persons/:id', (request, response) => {
    Contact.findById(request.params.id).then(contact => {
        if (person) {
            response.json(contact.toJSON())
        } else {
            response.status(404).end()
        }
    })
})
app.delete('/api/persons/:id', (request, response) => {
    Contact.findByIdAndRemove(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => response.status(400).json({ error }))
});

app.put('/api/persons/:id', (request, response) => {
    const body = request.body

    const newContact = {
        name: body.name,
        number: body.number,
    }
    Contact.findByIdAndUpdate(request.params.id, newContact, { new: true })
        .then(updatedContact => {
            response.json(updatedContact.toJSON())
        })
        .catch(error => response.status(400).json({ error }))
})

app.post('/api/persons', (request, response) => {
    const content = request.body
    if (!content) {
        return response.status(400).json({
            error: 'content missing'
        })
    }
    if (!content.name || !content.number) {
        return response.status(400).json({
            error: 'name or number missing'
        })
    }

    const newContact = new Contact({
        name: content.name,
        number: content.number,
    })
    newContact.save()
        .then(savedContact => {
            response.json(savedContact.toJSON())
        })
        .catch(error => response.status(400).json({ error })
        )
})