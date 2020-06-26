import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContentCard from './ContentCard';
import logo from '../assets/logo.png';
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";

const cardContent = {
    card1: {
        title: 'Crochet',
        img: logo,
        url: '/crochet'
    },
    card2: {
        title: 'Stickers',
        img: logo,
        url: '/stickers'
    },
    card3: {
        title: 'Buttons',
        img: logo,
        url: '/buttons'
    },
}

const ContentCards = () => {
    return (
        <Container className="content-cards-container mx-6">
            <Row xs={1} md={3} lg={3}>
                <ContentCard content={cardContent.card1} />
                <ContentCard content={cardContent.card2} />
                <ContentCard content={cardContent.card3} />
            </Row>
        </Container>
    )
}

export default ContentCards;