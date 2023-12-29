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
                <div className="headerTitle">Patents</div>
                <div className="container">
                    <div className="row display-flex g-5">
                        {patentsArray.slice(0, next).map((patent, index) => {
                            return (
                                <div className="col-12" key={index}>
                                    <div className={patent.cardStyle}>
                                        <div class="h5">{patent.title}</div>
                                        <hr/>
                                        <div class="h6">{patent.patentId} &#9675; {patent.dateIssued}</div>
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