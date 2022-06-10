import React from "react";
import { Card } from "react-bootstrap";

const About = () => {
    return (
        <Card id="about" style={{ backgroundColor: "#455A64" }} className="w-75 mx-auto my-5">
            <Card.Body className="text-white">
                <Card.Title className="fs-1 fw-bold text-center">ABOUT ME</Card.Title>
                <div className="w-50 mx-auto"><hr /></div>
                <Card.Text className="mx-md-2 px-md-2 mx-lg-5 px-lg-5 pt-3 fs-5">I'm <b>Zishad Hossain Limon</b>. At present I'm living in Dhaka which is the capital city of Bangladesh. I have completed my Bachelor's in <b>Computer Science & Engineering</b> in 2022. I am always feel excited to solving problems and very keen to learn new technologies.</Card.Text>
                <Card.Text className="mx-md-2 px-md-2 mx-lg-5 px-lg-5 pb-5 fs-5">After passing out from the university I started practicing <b>MERN Stack Web Development</b>. Besides, I have done some projects. During the learning process I found myself very patience. Based on academic background, knowledge and skills; I think I'm ready for a job/internship.</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default About;