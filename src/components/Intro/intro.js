import React, { useEffect } from 'react';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Splitting from 'splitting';
import './intro.css';
import bg from '../../assets/image.png';
gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
    useEffect(() => {
        const handleLoad = () => {
            let revealText = document.querySelectorAll(".revealText");
            let results = Splitting({ target: revealText, by: "lines" });

            results.forEach((splitResult) => {
                const wrappedLines = splitResult.lines.map((wordsArr) => `<span class="line"><div class="words">
                          ${wordsArr.map((word) => `${word.outerHTML}<span class="whitespace"> 
                         </span>`).join("")}</div></span>`).join("");
                splitResult.el.innerHTML = wrappedLines;
            });

            gsap.registerPlugin(ScrollTrigger);
            revealText.forEach((element) => {
                const lines = element.querySelectorAll(".line .words");

                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: element,
                        toggleActions: "play none none none",
                    }
                });
                tl.set(revealText, { autoAlpha: 1 });
                tl.from(lines, 1, {
                    yPercent: 100,
                    ease: Power3.out,
                    stagger: 0.3,
                    delay: 0.1
                });
            });
        };

        window.addEventListener('load', handleLoad);
        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (
        <section id="intro">
            <div className="introContent">
                <span className="introName revealText" id="textColorChange" aria-level="1" role="heading">Jeff White</span>
                <span className="titleText revealText" aria-level="2" role="heading">CTO Product & Operations - Edge Technology</span>
                <span className="titleText revealText" aria-level="2" role="heading">at Dell Technologies</span>
                <p className="introPara revealText" aria-label="Introduction Text" role="contentinfo">Experienced technology executive with proven record of accomplishment</p>
                <button className="yellowBtn" onClick={() => {
                    document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
                }}>Learn More</button>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;