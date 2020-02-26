import React from 'react';
import "./text-input.scss";

const TextInput = ({changeCallback, label, name, value}) => {
    return (
        <div className="text-input-component">
            <label htmlFor="textInput">{label}</label>
            <input
                type="text" name={name} value={value} onChange={changeCallback}/>
        </div>
    )
}

export default TextInput;