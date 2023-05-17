import React from "react"

const BasicButton = ({ text, onClick }) => {
    return ( 
        <button onClick={onClick}>
            {text}
        </button>
    )
}

export default BasicButton;