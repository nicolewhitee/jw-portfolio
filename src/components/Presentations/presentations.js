import React, { useState } from 'react';
import './presentations.css';
import presentationsArray from './presentationsArray.js';
const presentationsPerRow = 6;
const Presentations = () => {
    const [next, setNext] = useState(presentationsPerRow);
    const handleMorePresentations = () => {
        setNext(next + presentationsPerRow);
    }
    const handleLessPresentations = () => {
        setNext(presentationsPerRow);
        document.getElementById('presentations')?.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <>
            <section id='presentations'>
                <div className="headerTitle" aria-level="1" role="heading">Publications and Presentations</div>
                <div className="container">
                    <div className="row d-flex g-5">
                        {presentationsArray.slice(0, next).map((presentation, index) => {
                            return (
                                <div className="presentation-col-expand" key={index}>
                                    <div className="presentationCard d-flex flex-column">
                                        <div className="h4">{presentation.event}</div>
                                        <div className="h6">
                                            {presentation.location}
                                            {presentation.location && presentation.date && ' \u25CB '}
                                            {presentation.date}
                                        </div>
                                        <hr />
                                        <div className="h5 mb-auto">{presentation.title}</div>
                                        <a href={presentation.link} target="_blank" rel="noreferrer" aria-label="Presentation Link">
                                            <button className="presentationBtn">Link</button>
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="presentationBtnGroup">
                    {next < presentationsArray?.length && (
                        <button className="seeMoreBtn" onClick={handleMorePresentations}>See More</button>
                    )}
                    {next > presentationsPerRow && (
                        <button className="seeLessBtn" onClick={handleLessPresentations}>See Less</button>
                    )}
                </div>
            </section>
        </>
    );
};
export default Presentations;