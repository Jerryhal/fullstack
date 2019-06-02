import React from 'react'

const SuccessMessage = ({successMessage}) => {
    const style = {
        borderStyle: 'solid',
        borderColor: 'green',
        backgroundColor: 'light-green'
    }
    if (successMessage)
        return (
            <div style={style}>
                {successMessage}
            </div>
        )
    return ''
}
export default SuccessMessage;
