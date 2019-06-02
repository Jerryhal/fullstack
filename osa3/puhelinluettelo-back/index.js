const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(express.static('build'))
app.use(cors())
app.use(bodyParser.json())

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

let persons = [
    {
        name: "Martti Tienari",
        number: "040-123456",
        id: 2
    },
    {
        name: "Arto Järvinen",
        number: "040-123456",
        id: 3
    },
    {
        name: "Lea Kutvonen",
        number: "040-123456",
        id: 4
    }
]



app.get('/api/persons/', (request, response) => {
    response.json(persons)
})

app.get('/api/info/', (request, response) => {
    let responseString = `<div>Puhelinluettelossa on ${persons.length} henkilön tiedot</div>`
    responseString += `<div>${String(new Date())}</div>`
    response.send(responseString)
})


app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)

    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id);
    persons = persons.filter(person => person.id !== id);
    response.status(204).end();
});


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
    const nameExists = persons.find(person => person.name === content.name)
    const numberExists = persons.find(person => person.number === content.number)

    if (nameExists) {
        return response.status(400).json({
            error: 'name must be unique'
        })
    }
    if (numberExists) {
        return response.status(400).json({
            error: 'number must be unique'
        })
    }

    const newPerson = {
        name: content.name,
        number: content.number,
        id: Math.floor(Math.random() * 10000)
    }

    persons = persons.concat(newPerson)
    response.json(newPerson)
})