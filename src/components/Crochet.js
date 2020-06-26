import React from 'react';
import ContentCard from './ContentCard';
import logo from '../assets/logo.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const content = [
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link'
    },
]

const Crochet = props => {
    return (
        <Container>
            <Row xs={2} md={4} lg={6}>
                {content.map(item => <ContentCard content={item} />)}
            </Row>
        </Container>
    )
}

export default Crochet;