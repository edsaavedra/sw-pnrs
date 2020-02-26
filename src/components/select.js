import React from 'react';
import './select.scss';

const Select = ({ changeHandle, name, label, options, required, value }) => {
    return (
        <div className="select-component">
            <label htmlFor={name}>{label} {value}</label>
            <select
                value={value}
                name={name}
                onChange={changeHandle}
                required={required}>
                {options.map((option, _index) => <option
                    value={option.id}
                    key={_index}>
                        {option.id} {option.displayName}
                </option>)}
            </select>
        </div >
    )
}

export default Select;