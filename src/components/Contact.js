import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../css/Contact.css";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_l9s1sk5', 'template_3zy6krp', form.current, 'TOKNLfP-cApAzQAVd')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="form-container">
            <h1 className="text-center pt-2 pb-0 mb-0">CONTACT ME</h1>
            <form className="w-50 mx-auto pb-5" ref={form} onSubmit={sendEmail}>
                <div className="py-3">
                    <label className="form-label">Name</label>
                    <input className="form-control" type="text" name="user_name" required />
                </div>
                <div className="py-3">
                    <label>Email</label>
                    <input className="form-control" type="email" name="user_email" required />
                </div>
                <div className="py-3">
                    <label>Message</label>
                    <textarea className="form-control" name="message" required />
                </div>
                <div className="w-75 mx-auto py-3">
                    <button className="w-100 btn btn-primary btn-lg mx-auto" type="submit">SEND</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;