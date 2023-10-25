import React from 'react';

const TextArea = ({ columnSize, name, label, required, autoComplete, error, ...rest }) => {
    return (
        <div className={`col-sm-${columnSize}`}>
            <div className="input-block">
                <label htmlFor={name}>{label}{required ? <span className="color-signature">*</span> : ""}</label>
                <textarea {...rest} rows="3" name={name} className="form-control"></textarea>
                {error && <div className='alert alert-danger'>{error}</div>}
            </div>
        </div>);
}

export default TextArea;