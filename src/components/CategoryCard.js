import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CategoryCard = (props) => {
    const { title, img, url } = props.content;
    return (
        <Link to={url}>
            <Card className="content-card">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default CategoryCard;