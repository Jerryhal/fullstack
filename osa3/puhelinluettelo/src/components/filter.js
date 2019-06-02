import React from 'react'

const Filter = ({ filterContacts }) => {
    return (
        <div>
            rajaa näytettäviä <input onChange={filterContacts} />
        </div>
    )
}
export default Filter;