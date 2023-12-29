import React, { useState } from 'react';
import './presentations.css';
import Carousel from 'react-bootstrap/Carousel';
import lightGrayBg from '../../assets/light-gray-bg.jpg';

const Presentations = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <section id='presentations'>
            <div className="headerTitle" aria-level="1" role="heading">Presentations</div>
            <div class="container">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img className="d-block w-100" src={lightGrayBg} alt="Light Gray Background" />
                        <Carousel.Caption>
                            <div class="container">
                                <div class="h3">First slide</div>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={lightGrayBg} alt="Light Gray Background" />
                        <Carousel.Caption>
                            <div class="container">
                                <div class="h3">Second slide</div>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={lightGrayBg} alt="Light Gray Background" />
                        <Carousel.Caption>
                            <div class="container">
                                <div class="h3">Third slide</div>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </section>
    );
}

export default Presentations;