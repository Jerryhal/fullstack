import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Phonebook from './components/phonebook'
import './index.css'
import { getAll, create, remove, put } from './functions/rest.functions'

const App = () => {
    useEffect(() => {
        getAll().then(persons => {
            changeContactsState(persons)
        })
    }, [])

    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [filteredContacts, setFilteredContacts] = useState(persons)

    const changeContactsState = (state) => {
        setPersons(state)
        setFilteredContacts(state)
    }
    const addContact = (event) => {
        event.preventDefault()
        const newPerson = {
            name: newName,
            number: newNumber
        }
        const personExists = persons.find(person => person.name === newPerson.name)
        if (!personExists) {
            create(newPerson).then(newPerson => {
                changeContactsState(persons.concat(newPerson))
                setTimeout(() => {
                    setSuccessMessage(null)
                }, 5000)
                setSuccessMessage('Listättiin ' + newPerson.name)
            })
        } else if (personExists && newPerson.number && newPerson.number.length > 0) {
            put(newPerson, personExists.id).then(asd =>
                changeContactsState(persons.map(person => person.id !== personExists.id ? person : newPerson))
                )
        } else {
            alert(`${newName} on jo luettelossa`)
        }
    }
    const removeContact = (person) => {
        remove(person)
            .then(() => {
                changeContactsState(persons.filter(e => e.id !== person.id))
            })
    }

    const nameHandler = (event) => setNewName(event.target.value)
    const numberHandler = (event) => setNewNumber(event.target.value)
    const filterContacts = (event) =>
        setFilteredContacts(persons.filter(person =>
            person.name.substring(
                0, event.target.value.length) === event.target.value)
        )
    return (
        <Phonebook filterContacts={filterContacts} addContact={addContact}
            nameHandler={nameHandler} numberHandler={numberHandler}
            filteredContacts={filteredContacts}
            successMessage={successMessage} removeContact={removeContact} />
    )
}

ReactDOM.render(<App />, document.getElementById('root'));