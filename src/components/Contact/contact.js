import './contact.css';
import twitterIcon from '../../assets/twitter.png';
import linkedInIcon from '../../assets/linkedin.png';
import githubIcon from '../../assets/github.png';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [emailMessageStatus, setEmailStatusMessage] = useState("");
    const [emailFormatStatus, setEmailFormatStatus] = useState("");
    const form = useRef();

    const sendEmail = (e) => {
        const emailInput = document.getElementById('email');

        if (emailInput.validity.valid) {
            e.preventDefault();

            emailjs.sendForm('service_zf7ce9f', 'template_f28vzpq', form.current, 'LxgKr7pP3nRMDurse')
                .then((result) => {
                    console.log(result.text);
                    e.target.reset();
                    setEmailStatusMessage("Your message has been sent.");
                }, (error) => {
                    console.log(error.text);
                    setEmailStatusMessage("Your message is not able to be sent at this time. Please try again later.");
                });
        } else {
            setEmailFormatStatus("Please enter a valid email.");
        }
    };
    
    return (
        <div id='contactPage'>
            <div id="contact">
                <div className="headerTitle">Contact Me</div>
                <span className="contactDesc">Please fill out the form below.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' name='from_name' />
                    <input type="email" id="email" className="email" placeholder='Your Email' name='from_email' />
                    <p className="text-warning">{emailFormatStatus}</p>
                    <textarea name="message" placeholder='Your Message' rows={5} className='msg' ></textarea>
                    <p>{emailMessageStatus}</p>
                    <button type="submit" value="Send" className='submitBtn'>Submit</button>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/wjeffwhite/" target="_blank" rel="noreferrer">
                            <img src={linkedInIcon} alt="LinkedIn" className="link" />
                        </a>
                        <a href="https://www.linkedin.com/in/wjeffwhite/" target="_blank" rel="noreferrer">
                            <img src={githubIcon} alt="GitHub" className="link" />
                        </a>
                        <a href="https://twitter.com/wjeffwhite?s=11&t=WfdM9Plu8tEwtS6ePJjaVQ" target="_blank" rel="noreferrer">
                            <img src={twitterIcon} alt="Twitter" className="link" />
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;