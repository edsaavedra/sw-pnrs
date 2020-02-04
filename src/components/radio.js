import React from 'react';
import PropTypes from 'prop-types';
import './radio.scss'

const Radio = ({ name, value, checked, changeHandle, label }) => {
    const classNames = `radio-component ${name}`;
    return (
        <label htmlFor={value} className={classNames}>
            <div className="radio-container">
                <input
                    type="radio"
                    name={name}
                    value={value}
                    checked={checked}
                    onChange={changeHandle}
                    id={value} />
            </div>
            <span className={name}>{label}</span>
        </label>
    );
}

Radio.propTypes = {
    changeHandle: PropTypes.func.isRequired,
    checked: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

export default Radio;