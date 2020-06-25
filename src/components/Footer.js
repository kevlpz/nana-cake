import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebookSquare, FaTwitterSquare, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <Container className="footer">
            <Row xs={1} sm={3}>
                <Col>
                    <h3>Information</h3>
                    <p>About</p>
                    <p>Blog</p>
                </Col>
                <Col>
                    <h3>Our policies</h3>
                    <p>Shipping & Returns</p>
                    <p>Terms of Service</p>
                </Col>
                <Col>
                    <h3>Follow</h3>
                    <FaFacebookSquare />
                    <FaTwitterSquare />
                    <FaEnvelope />
                    <p>Instagram</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;