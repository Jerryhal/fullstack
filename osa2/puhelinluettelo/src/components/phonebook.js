import React from 'react'

import Rows from './rows'
import SuccessMessage from './messages'
import Filter from './filter'
import Form from './form'

const Phonebook = ({ filterContacts, addContact, 
    nameHandler, numberHandler, removeContact,
    filteredContacts, successMessage }) => {
    return (
        <div>
            <SuccessMessage successMessage={successMessage} />
            <h2>Puhelinluettelo</h2>
            <Filter filterContacts={filterContacts} />
            <Form addContact={addContact} nameHandler={nameHandler} numberHandler={numberHandler} />
            <h2>Numerot</h2>
            <Rows persons={filteredContacts} removeContact={removeContact} />
        </div>
    )
}
export default Phonebook;