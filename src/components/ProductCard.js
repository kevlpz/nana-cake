import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';


const ProductCard = (props) => {
    const { title, img, url } = props.content;
    return (
        <Container>
            <Card className="product-card my-3">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ProductCard;