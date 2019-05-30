import React from 'react'

const Form = ({ addContact, nameHandler, numberHandler }) => {
    return (
        <form onSubmit={addContact}>
            <div>
                nimi: <input onChange={nameHandler} />
            </div>
            <div>
                numero: <input onChange={numberHandler} />
            </div>
            <div>
                <button type="submit">lisää</button>
            </div>
        </form>
    )
}
export default Form;
