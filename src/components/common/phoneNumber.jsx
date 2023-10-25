import React from 'react';
import { PatternFormat } from 'react-number-format';

const PhoneNumber = ({ columnSize, name, label, required, autoComplete, error, ...rest }) => {
    return (
        <div className={`col-sm-${columnSize}`}>
            <div className="input-block">
                <label htmlFor={name}>{label}{required ? <span className="color-signature">*</span> : ""}</label>
                <PatternFormat {...rest} name={name} className="form-control" format="(###) ###-####" mask="_" />
                {error && <div className='alert alert-danger'>{error}</div>}
            </div>
        </div>);
}

export default PhoneNumber;