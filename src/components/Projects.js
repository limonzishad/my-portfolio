import React from "react";
import "../css/Projects.css";
import Electrool from "../assets/Electrool.png";
import HandsetStore from "../assets/HandsetStore.png";
import OnlineTutor from "../assets/OnlineTutor.png";

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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ex dolorem veritatis expedita quis reiciendis, quae sed. Aut optio nesciunt, totam quae quos quam animi, iure laboriosam consectetur incidunt hic.</p>
                        <div className="button-group">
                            <a href="https://electrool.web.app/" target="_blank" rel="noreferrer"><button className="live-site">LIVE SITE</button></a>
                            <a href="https://github.com/limonzishad/electrool-client" target="_blank" rel="noreferrer"><button className="git-link">CLIENT</button></a>
                            <a href="https://github.com/limonzishad/electrool-server" target="_blank" rel="noreferrer"><button className="git-link">SERVER</button></a>
                        </div>
                        <div>
                            <a href=""><button className="details-button">DETAILS</button></a>
                        </div>
                    </div>
                </div>

                <div className="project">
                    <div className="project-image">
                        <img src={HandsetStore} alt="HandsetStore.png" />
                    </div>

                    <div className="project-details">
                        <h2>HANDSET STORE</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ex dolorem veritatis expedita quis reiciendis, quae sed. Aut optio nesciunt, totam quae quos quam animi, iure laboriosam consectetur incidunt hic.</p>
                        <div className="button-group">
                            <a href="https://handset-store.web.app/" target="_blank" rel="noreferrer"><button className="live-site">LIVE SITE</button></a>
                            <a href="https://github.com/limonzishad/handset-store" target="_blank" rel="noreferrer"><button className="git-link">CLIENT</button></a>
                            <a href="https://github.com/limonzishad/handset-store-server" target="_blank" rel="noreferrer"><button className="git-link">SERVER</button></a>
                        </div>
                        <div>
                            <a href=""><button className="details-button">DETAILS</button></a>
                        </div>
                    </div>
                </div>

                <div className="project">
                    <div className="project-image">
                        <img src={OnlineTutor} alt="OnlineTutor.png" />
                    </div>

                    <div className="project-details">
                        <h2>ONLINE TUTOR</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ex dolorem veritatis expedita quis reiciendis, quae sed. Aut optio nesciunt, totam quae quos quam animi, iure laboriosam consectetur incidunt hic.</p>
                        <div className="button-group">
                            <a href="https://online-tutor-dba75.web.app/" target="_blank" rel="noreferrer"><button className="live-site">LIVE SITE</button></a>
                            <a href="https://github.com/limonzishad/online-tutor" target="_blank" rel="noreferrer"><button className="git-link">GITHUB</button></a>
                        </div>
                        <div>
                            <a href=""><button className="details-button">DETAILS</button></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Projects;