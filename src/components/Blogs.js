import React from "react";
import { Card } from "react-bootstrap";

const Blogs = () => {
    return (
        <Card id="blogs" className="w-25 mx-auto mt-5">
            <Card.Title className="fs-1 fw-bold text-center">BLOGS</Card.Title>
            <Card.Img variant="top" className="w-100 mx-auto" src="https://img.freepik.com/free-vector/coming-soon-construction-yellow-background_1017-33742.jpg?t=st=1654860037~exp=1654860637~hmac=e28bf8cf205984cd27508ee70705b299f9341871112bc19fe16ba3af24c15881&w=826" />
        </Card>
    );
};

export default Blogs;