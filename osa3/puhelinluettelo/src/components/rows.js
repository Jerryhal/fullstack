import React from 'react'

const Rows = ({ persons, removeContact }) => {
    const rows = () => {
        if (persons && persons.length && persons.length > 0)
            return persons.map((person, i) =>
                    <li>{person.name} {person.number} <button onClick={() => removeContact(person)}>poista</button></li>
            )
        return 'no rows'
    }

    return (
        <>
            <ul>
                {rows()}
            </ul>
        </>
    )
}
export default Rows;
