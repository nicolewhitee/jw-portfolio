import React from 'react';
import './skills.css';
import ArtificialIntelligence from '../../assets/artificial-intelligence.png';
import EdgeCompute from '../../assets/edge-computing.png';
import Telecommunications from '../../assets/telecommunication.png';
import AgileMethodology from '../../assets/agile.png';
import Dell from '../../assets/dell-logo.png';
import ElefanteGroup from '../../assets/elefante-logo.jpg';
import HP from '../../assets/hp-logo.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">Skills</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={ArtificialIntelligence} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Artificial Intelligence (AI)</h2>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={EdgeCompute} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Edge Compute</h2>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Telecommunications} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Telecommunications</h2>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AgileMethodology} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Agile Methodology</h2>
                    </div>
                </div>
            </div>
            <span className="skillTitle">Experience</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={Dell} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Chief Technology Officer - Edge Product & Operations</h2>
                        <h3>Dell Technologies &#9675; 2022 - Present</h3>
                        <p>
                            Chief Technology Officer for Edge at Dell Technologies CTIO organization.
                            Focus on Edge platform design and application of Edge technology to current
                            enterprise use cases and emerging use cases of simulation(XR/VR) and autonomous
                            systems. Structured Edge partner design program, Edge patent committee co-chair,
                            member of AI/ML Architecture Review Board. Technical focus areas in Distributed
                            Systems Design, Edge Orchestration, Edge Infrastructure Control, Scheduling
                            Algorithm design, AI/ML workload support, MultiCloud Execution Environment, Edge
                            Information-Data Management, Edge Native Hardware evolution.
                        </p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Dell} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Industry Chief Technology Officer - Edge Technology and Autonomous Systems</h2>
                        <h3>Dell Technologies &#9675; 2018 - 2021</h3>
                        <p>
                            Lead for edge technology development, composable systems technology strategy and
                            autonomous technical ecosystem development for the Global Office of CTO for Dell
                            Technologies. Areas of technology research include edge distributed systems management,
                            edge communications, platform as a service, autonomous systems, applied artificial
                            intelligence, distributed data management, hybrid multi-cloud architecture,
                            policy/control/orchestration. Lead an architecture and development team focused on
                            customer collaborative research. Chair the Dell Automotive Design Authority Council
                            providing technical leadership of Dell's automotive vertical. Vice-Chairman award
                            winner for 2020. Patents in the area of edge platform control, distributed data management,
                            cloud native application management, scheduling and autonomic control.
                        </p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={ElefanteGroup} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Chief Technology Officer</h2>
                        <h3>Elefante Group &#9675; 2017 - 2018</h3>
                        <p>
                            Early stage venture focused on experimental stratospheric communications platform for Broadband
                            and 5G access. Directed technology strategy, spectrum acquisition, system planning and system
                            design in conjunction with tier 1 US defense contractor. Led technology discussions with prospective
                            investors, government regulators and partners.
                        </p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={HP} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Head of Communications Media & Entertainment Practice Americas</h2>
                        <h3>Hewlett Packard Enterprise &#9675; 2015 - 2017</h3>
                        <p>
                            Lead HPE efforts in Communications segment in developing innovative solutions addressing transformation
                            to Cloud, SDN and IP based platforms and business models. Set strategy, Design Solutions and Develop
                            Business engagement. Significant engagements with clients in net new business areas.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;