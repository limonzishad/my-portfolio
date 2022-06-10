import React from "react";
import zishadlimon from "../assets/zishadlimon.png";
import "../css/Home.css";

const Home = () => {
    return (
        <div id="home" className="home-section">
            <div className="left-side">
                <h1 style={{ color: "white" }}>hello world, I'm ZISHAD HOSSAIN LIMON</h1>
                <h2 style={{ color: "white" }}>WEB DEVELOPER</h2>
                <p className="custom-text">A passionate web developer who wants to be a professional in the web development industry.</p>
                <a target="_blank" href="https://drive.google.com/file/d/1belp8U8dU3kN7vjsUMWJNCCbrlo5i0I-/view?usp=sharing" rel="noreferrer"><button className="resume-button">CHECK MY RESUME</button></a>
            </div>
            <div className="right-side">
                <img src={zishadlimon} alt="zishadlimon" />
            </div>
        </div>
    );
};

export default Home;