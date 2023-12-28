import React, { useState } from 'react';
import './patents.css';
import patentsArray from './patentsArray.js';

const patentPerRow = 3;

const Patents = () => {
    const [next, setNext] = useState(patentPerRow);

    const handleMorePatents = () => {
        setNext(next + patentPerRow);
    }
    return (
        <>
            <section id='patents'>
                <h2 className="headerTitle">Patents</h2>
                <div className="container">
                    <div className="row display-flex g-5">
                        {patentsArray.slice(0, next).map((patent, index) => {
                            return (
                                <div className="col-12" key={index}>
                                    <div className={patent.cardStyle}>
                                        <h5>{patent.title}</h5>
                                        <hr/>
                                        <h6>{patent.patentId} &#9675; {patent.dateIssued}</h6>
                                        <p class="patentDescr">{patent.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {next < patentsArray?.length && (
                        <button className="patentBtn" onClick={handleMorePatents}>See More</button>
                    )}
                </div>
            </section>
        </>
    );
};

export default Patents;