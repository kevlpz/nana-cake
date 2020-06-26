import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import logo from '../assets/logo.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ContentCard = () => {
    return (
        <Container>
            <Card className="content-card my-3">
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ContentCard;