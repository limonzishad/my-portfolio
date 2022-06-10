import React from "react";
import "../css/Projects.css";
import Electrool from "../assets/Electrool.png";
import HandsetStore from "../assets/HandsetStore.png";
import OnlineTutor from "../assets/OnlineTutor.png";
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <div id="projects">
            <h1 className="text-center title">MY PROJECTS</h1>

            <div className="project-container">
                <div className="project">
                    <div className="project-image">
                        <img src={Electrool} alt="Electrool.png" />
                    </div>

                    <div className="project-details">
                        <h2>ELECTROOL</h2>
                        <p>Electrool is a manufacturers website where byers can buy products (electric tools) from them. Users can Register and Login to the website using Email address or with Google accounts and users will receive a verification email after successful registration. Users can order products if the product is available.</p>
                        <div className="button-group">
                            <a href="https://electrool.web.app/" target="_blank" rel="noreferrer"><button className="live-site">LIVE SITE</button></a>
                            <a href="https://github.com/limonzishad/electrool-client" target="_blank" rel="noreferrer"><button className="git-link">CLIENT</button></a>
                            <a href="https://github.com/limonzishad/electrool-server" target="_blank" rel="noreferrer"><button className="git-link">SERVER</button></a>
                        </div>
                        <div>
                            <Link to=""><button className="details-button">DETAILS</button></Link>
                        </div>
                    </div>
                </div>

                <div className="project">
                    <div className="project-image">
                        <img src={HandsetStore} alt="HandsetStore.png" />
                    </div>

                    <div className="project-details">
                        <h2>HANDSET STORE</h2>
                        <p>Handset Store is a warehouse or inventory based website for mobile/smart devices. Users can Register and Login to the website using Email address or with Google accounts. Users will receive a verification email after successful registration. Besides, users can reset their password. Also, there are some protected pages which require user Login to visit those pages.</p>
                        <div className="button-group">
                            <a href="https://handset-store.web.app/" target="_blank" rel="noreferrer"><button className="live-site">LIVE SITE</button></a>
                            <a href="https://github.com/limonzishad/handset-store" target="_blank" rel="noreferrer"><button className="git-link">CLIENT</button></a>
                            <a href="https://github.com/limonzishad/handset-store-server" target="_blank" rel="noreferrer"><button className="git-link">SERVER</button></a>
                        </div>
                        <div>
                            <Link to=""><button className="details-button">DETAILS</button></Link>
                        </div>
                    </div>
                </div>

                <div className="project">
                    <div className="project-image">
                        <img src={OnlineTutor} alt="OnlineTutor.png" />
                    </div>

                    <div className="project-details">
                        <h2>ONLINE TUTOR</h2>
                        <p>Online Tutor is a website for an individual person (teacher) who provides services (courses). Users can Register and Login to the website using Email address or with Google accounts. Users will receive a verification email after successful registration. Besides, user can reset their password.</p>
                        <div className="button-group">
                            <a href="https://online-tutor-dba75.web.app/" target="_blank" rel="noreferrer"><button className="live-site">LIVE SITE</button></a>
                            <a href="https://github.com/limonzishad/online-tutor" target="_blank" rel="noreferrer"><button className="git-link">GITHUB</button></a>
                        </div>
                        <div>
                            <Link to=""><button className="details-button">DETAILS</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Projects;