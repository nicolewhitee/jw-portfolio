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
            <h1 className="headerTitle">Presentations</h1>
            <div class="container">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img className="d-block w-100" src={lightGrayBg} alt="Light Gray Background" />
                        <Carousel.Caption>
                            <div class="container">
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={lightGrayBg} alt="Light Gray Background" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={lightGrayBg} alt="Light Gray Background" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </section>
    );
}

export default Presentations;