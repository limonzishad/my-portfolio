import React from "react";
import { Card } from "react-bootstrap";
import Facebook from "../assets/Facebook.png";
import Github from "../assets/Github.png";
import LinkedIn from "../assets/LinkedIn.png";
import "../css/Footer.css";

const Footer = () => {
    return (
        <Card className="bg-dark text-white text-center">
            <Card.Header>LAST BUT NOT THE LEAST</Card.Header>
            <Card.Body>
                <Card.Text>Thank you for visiting my portfolio</Card.Text>
                <Card.Title>SOCIAL LINKS</Card.Title>
                <div className="social-icons">
                    <Card.Text><a href="https://www.facebook.com/limonzishad/" target="_blank"><img src={Facebook} alt="github_icon" /></a></Card.Text>
                    <Card.Text><a href="https://github.com/limonzishad" target="_blank"><img src={Github} alt="github_icon" /></a></Card.Text>
                    <Card.Text><a href="https://www.linkedin.com/in/limonzishad/" target="_blank"><img src={LinkedIn} alt="github_icon" /></a></Card.Text>
                </div>
            </Card.Body>
            <Card.Footer className="bg-dark text-white">&copy; copyright 2022. All right reserve to zishadlimon@gmail.com</Card.Footer>
        </Card>
    );
}

export default Footer;