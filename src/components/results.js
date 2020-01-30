import React from 'react';
import './results.scss';

const Results = ({open, close}) => {
    const classNames = `results-component ${open ? 'open': ''}`;

    return (
        <div className={classNames} onClick={close}>
            Yoo
        </div>
    );
}

export default Results;