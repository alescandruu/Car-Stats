import React from "react";

const Input = ({ labelText, value }) => {
    return (
        <div className="InputContainer">
            <p>{labelText}</p>
            <input value={value} />
        </div>
    )
}

export default Input;