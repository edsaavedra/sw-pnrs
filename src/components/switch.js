import React from 'react';
import PropTypes from 'prop-types';
import './switch.scss'

const Switch = ({ name, left, right, title, changeCallback, checked }) => {
    const classNames=`field switch-component ${name}`;
    return (
        <div className={classNames}>
            <label htmlFor={name}>
                <span className="field-title">{title}</span>
                <span className="left-label label">{left}</span>
                <div className="switch">
                    <input
                        type="checkbox"
                        checked={checked}
                        name={name}
                        onChange={changeCallback}
                        id={name} />
                    <span className="slider"><span className="inner" /></span>
                </div>
                <span className="right-label label">{right}</span>
            </label>
        </div>
    );
}

Switch.propTypes = {
    changeCallback: PropTypes.func.isRequired,
    checked: PropTypes.bool.isRequired,
    left: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    right: PropTypes.string.isRequired,
}

export default Switch;