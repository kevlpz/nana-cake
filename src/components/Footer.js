import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebookSquare, FaTwitterSquare, FaEnvelope, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <Container fluid className="footer">
            <Row xs={1} sm={3}>
                <Col className="footer-section mb-5">
                    <h3>Information</h3>
                    <p>About</p>
                    <p>Blog</p>
                </Col>
                <Col className="footer-section mb-5">
                    <h3>Our policies</h3>
                    <p>Shipping & Returns</p>
                    <p>Terms of Service</p>
                </Col>
                <Col className="footer-section mb-5">
                    <Container>
                            <h3>Follow</h3>
                        <Row >
                            <Col>
                                <FaFacebookSquare />
                            </Col>
                            <Col>
                                <FaTwitterSquare />
                            </Col>
                            <Col>
                                <FaEnvelope />
                            </Col>
                            <Col>
                                <FaInstagram />
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;