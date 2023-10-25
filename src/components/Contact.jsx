import React from 'react';
import Header from './common/Header';
import Form from './common/form';

import Joi from 'joi-browser';

import emailjs from '@emailjs/browser';
import $ from "jquery";
import Footer from './common/Footer';

class Contact extends Form {
    state = {
        data: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            messageSubject: '',
            message: ''
        },
        errors: {}
    }

    schema = {
        firstName: Joi.string().required().label("First Name"),
        lastName: Joi.string().allow('').label("Last Name"),
        phoneNumber: Joi.label("Phone Number"),
        email: Joi.string().required().email().label("Email"),
        messageSubject: Joi.string().required().label("Message Subject"),
        message: Joi.string().required().label("Message"),
    }

    doSubmit = (e) => {
        emailjs.sendForm('Portfolio Contract Form', 'portfolio_template', '#contact-form', 'gj7UK3ZbUEd2l7NNx')
            .then((result) => {
                console.log(result.text);
                this.resetForm();
                $('#submit-message').html("Success!")
            }, (error) => {
                console.log(error.text);
            });
    };

    resetForm() {
        this.setState({
            data: {
                firstName: '',
                lastName: '',
                phoneNumber: '',
                email: '',
                messageSubject: '',
                message: ''
            }
        })
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3">
                            <h1>Contact</h1>
                            <p>
                                Email: <a className="color-secondary hover-signature" href="mailto:lucy.f.swett@gmail.com">lucy.f.swett@gmail.com</a>
                                <br></br>
                                Phone: <a className="color-secondary hover-signature" href="tel:904-382-4854">(904) 382-4854</a>
                            </p>
                        </div>
                        <section className="col-xl-9 contact-wrap">
                            <form id="contact-form" onSubmit={this.handleSubmit} className="contact-form">
                                <div className="row">
                                    {this.renderInput("6", "firstName", "First Name", "required")}
                                    {this.renderInput("6", "lastName", "Last Name")}
                                </div>
                                <div className="row my-3">
                                    {this.renderPhoneNumber("6", "phoneNumber", "Phone Number")}
                                    {this.renderInput("6", "email", "Email", "email", "required")}
                                </div>
                                <div className="row my-3">
                                    {this.renderInput("12", "messageSubject", "Message Subject", "required")}
                                </div>
                                <div className="row my-3">
                                    {this.renderTextArea("12", "message", "Drop your message here", "required")}
                                </div>
                                <div className="row my-3">
                                    {this.renderButton("Submit")}
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
                <Footer />
            </div>
        );

    }

}

export default Contact;