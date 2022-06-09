import React from "react";
import "../css/Footer.css";
import Github from "../assets/Github.png";
import Facebook from "../assets/Facebook.png";
import LinkedIn from "../assets/LinkedIn.png";

const Footer = () => {
    return (
        <div className="bg-dark text-white text-center footer-position">
            <div className="social-icons">
                <a href="https://www.facebook.com/limonzishad/" target="_blank" rel="noreferrer"><img src={Facebook} alt="github_icon" /></a>
                <a href="https://github.com/limonzishad" target="_blank" rel="noreferrer"><img src={Github} alt="github_icon" /></a>
                <a href="https://www.linkedin.com/in/limonzishad/" target="_blank" rel="noreferrer"><img src={LinkedIn} alt="github_icon" /></a>
            </div>
            <h6>&copy; copyright 2022. All right reserve to zishadlimon@gmail.com</h6>
        </div>
    );
}

export default Footer;