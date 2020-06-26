import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import logo from '../assets/logo.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const ContentCard = (props) => {
    const { title, img, url } = props.content;
    return (
        <Link to={url}>
            <Container onClick={() => console.log('clicked')}>
                <Card className="content-card my-3">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                    </Card.Body>
                </Card>
            </Container>
        </Link>
    )
}

export default ContentCard;