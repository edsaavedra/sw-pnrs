import React from 'react';
import './dates.scss';

const Dates = ({changeHandle, min, name, label, value}) => {
    return (
        <div className="date-component">
            <label htmlFor={name} >{label}</label>
            <input
                type="date"
                onChange={changeHandle}
                min={min}
                name={name}
                value={value}/>
        </div>
    )
}

export default Dates;