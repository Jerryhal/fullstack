import React from 'react'

const Message = ({ message }) => {
    const successStyle = {
        borderStyle: 'solid',
        borderColor: 'green',
        backgroundColor: 'light-green'
    }
    const errorStyle = {
        borderStyle: 'solid',
        borderColor: 'red',
        backgroundColor: 'light-pink'
    }

    if (message) {
        if (message.success) {
            return (
                <div style={successStyle}>
                    {message.success}
                </div>
            )
        } else if (message.error) {
            return (
                <div style={errorStyle}>
                    {message.error}
                </div>
            )
        }
    }
    return ''
}
export default Message;
