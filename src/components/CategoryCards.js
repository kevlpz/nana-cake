import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CategoryCard from './CategoryCard';
import logo from '../assets/logo.png';

const categories = {
    crochet: {
        title: 'Crochet',
        img: logo,
        url: '/crochet'
    },
    stickers: {
        title: 'Stickers',
        img: logo,
        url: '/stickers'
    },
    buttons: {
        title: 'Buttons',
        img: logo,
        url: '/buttons'
    },
}

const CategoryCards = () => {
    return (
        <Container className="content-cards-container mx-6">
            <Row xs={1} md={3} lg={3}>
                <CategoryCard content={categories.crochet} />
                <CategoryCard content={categories.stickers} />
                <CategoryCard content={categories.buttons} />
            </Row>
        </Container>
    )
}

export default CategoryCards;