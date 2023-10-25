import React from 'react';

const Input = ({ columnSize, name, label, required, autoComplete, error, ...rest }) => {
    return (
        <div className={`col-sm-${columnSize}`}>
            <div className="input-block">
                <label htmlFor={name}>{label}{required ? <span className="color-signature">*</span> : ""}</label>
                <input {...rest} name={name} autoComplete={autoComplete} className="form-control" />
                {error && <div className='alert alert-danger'>{error}</div>}
            </div>
        </div>);
}

export default Input;