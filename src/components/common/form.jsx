import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';
import PhoneNumber from './phoneNumber';
import TextArea from './textarea';

class Form extends Component {
    state = {
        data: {},
        errors: {}
    }

    validate = () => {
        const { error } = Joi.validate(this.state.data, this.schema, { abortEarly: false })
        if (!error) return null;
        const errors = {};
        for (let item of error.details)
            errors[item.path[0]] = item.message
        return errors;
    }

    validateProperty = ({ name, value }) => {
        const obj = { [name]: value }
        const schema = { [name]: this.schema[name] }
        const { error } = Joi.validate(obj, schema)
        return error ? error.details[0].message : null
    }

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;

        this.doSubmit();
    }

    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors }
        const errorMessage = this.validateProperty(input)
        if (errorMessage) errors[input.name] = errorMessage
        else delete errors[input.name]

        const data = { ...this.state.data }
        data[input.name] = input.value

        this.setState({ data, errors })
    }

    renderButton(label) {
        return (
            <div className="col-sm-12">
                <button disabled={this.validate()} className="btn-theme btn-black">{label}</button>
                <p id="submit-message"></p>
            </div>
        )
    }

    renderInput(columnSize, name, label, required, type = "text") {
        const { data, errors } = this.state;
        return (<Input columnSize={columnSize} type={type} name={name} label={label} required={required} value={data[name]} onChange={this.handleChange} error={errors[name]} />)
    }

    renderPhoneNumber(columnSize, name, label, required, type = "tel") {
        const { data, errors } = this.state;
        return (<PhoneNumber columnSize={columnSize} type={type} name={name} label={label} required={required} value={data[name]} onChange={this.handleChange} error={errors[name]} />)
    }

    renderTextArea(columnSize, name, label, required, type = "text") {
        const { data, errors } = this.state;
        return (<TextArea columnSize={columnSize} type={type} name={name} label={label} required={required} value={data[name]} onChange={this.handleChange} error={errors[name]} />)
    }
}

export default Form;