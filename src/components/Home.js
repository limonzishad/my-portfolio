import React from "react";
import zishadlimon from "../assets/zishadlimon.png";
import "../css/Home.css";

const Home = () => {
    return (
        <div id="home" className="home-section">
            <div className="left-side">
                <h1 style={{ color: "white" }}>hello world, I'M LIMON</h1>
                <p className="custom-text">My name is ZISHAD HOSSAIN LIMON and I am from Dhaka, Bangladesh. I have completed my Bachelor in Computer Science & Engineering. At present, I am working on my skills to become a professional Software & Web Engineer. Also, I have learned and practised MERN Stack Web Development out of curiosity and passion.</p>
                <a target="_blank" href="https://drive.google.com/file/d/1belp8U8dU3kN7vjsUMWJNCCbrlo5i0I-/view?usp=sharing" rel="noreferrer"><button className="resume-button">CHECK MY RESUME</button></a>
            </div>
            <div className="right-side">
                <img src={zishadlimon} alt="zishadlimon" />
            </div>
        </div>
    );
};

export default Home;