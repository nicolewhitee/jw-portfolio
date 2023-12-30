import React from 'react';
import './presentations.css';
import presentationsArray from './presentationsArray.js';

const Presentations = () => {
    return (
        <>
            <section id='presentations'>
                <div className="headerTitle" aria-level="1" role="heading">Presentations</div>
                <div className="container">
                    <div className="row d-flex g-5">
                        {presentationsArray.map((presentation, index) => {
                            return (
                                <div className="col-4" key={index}>
                                    <div className="presentationCard d-flex flex-column">
                                        <div class="h4">{presentation.event}</div>
                                        <div class="h6">{presentation.location} &#9675; {presentation.date}</div>
                                        <hr />
                                        <div class="h5 mb-auto">{presentation.title}</div>
                                        <a href={presentation.link} target="_blank" rel="noreferrer" aria-label="Presentation Link">
                                            <button class="yellowBtn">Link</button>
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Presentations;