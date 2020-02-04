import React from 'react';
import PropTypes from 'prop-types';
import './range.scss'

const Range = ({ min, max, step, name, changeHandle, current }) => {
    const classNames = `field range-component ${name}`;
    return (
        <div className={classNames}>
            <label htmlFor={name}>
                <span className="field-title">Passengers {current}</span>
                <div className="input-container">
                    <input
                        className="range"
                        id={name}
                        max={max}
                        min={min}
                        name={name}
                        onChange={changeHandle}
                        step={step}
                        type="range"/>
                </div>
            </label>
        </div>
    );
}

Range.propTypes = {
    changeHandle: PropTypes.func.isRequired,
    current: PropTypes.string.isRequired,
    max: PropTypes.string.isRequired,
    min: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    step: PropTypes.string.isRequired
}

export default Range;