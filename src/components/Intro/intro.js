import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="introText">
                    <span className="introName">Jeff White</span>
                    <br />
                    <span className="titleText">CTO Product & Operations - Edge Technology <br/>at Dell Technologies</span>
                </span>
                <p className="introPara">Experienced technology executive with proven record of accomplishment</p>

                <button className="learnMoreBtn" onClick={() => {
                    document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
                }}>Learn More</button>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;