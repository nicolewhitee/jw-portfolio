import './contact.css';
import twitterIcon from '../../assets/twitter.png';
import linkedInIcon from '../../assets/linkedin.png'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6phm4ar', 'template_zcxds5a', form.current, 'blaHt_5KIJ711DfGH')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                // TODO: add box when email has been successfully submitted
            }, (error) => {
                console.log(error.text);
            });
    };
    
    return (
        <div id='contactPage'>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your name' name='from_name' />
                    <input type="text" className="email" placeholder='Your Email' name='from_email' />
                    <textarea name="message" placeholder='Your Message' rows={5} className='msg' ></textarea>
                    <button type="submit" value="Send" className='submitBtn'>Submit</button>
                    <div className="links">
                        <img src={twitterIcon} alt="Twitter" className="link" />
                        <a href="https://www.linkedin.com/in/wjeffwhite/">
                            <img src={linkedInIcon} alt="LinkedIn" className="link" />
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;