import React from 'react';
import ContentCard from './ContentCard';
import logo from '../assets/logo.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const content = [
    {
        title: 'stickers',
        img: logo,
        url: 'stickers-link'
    },
    {
        title: 'stickers',
        img: logo,
        url: 'stickers-link'
    },
    {
        title: 'stickers',
        img: logo,
        url: 'stickers-link'
    },
    {
        title: 'stickers',
        img: logo,
        url: 'stickers-link'
    },
    {
        title: 'stickers',
        img: logo,
        url: 'stickers-link'
    },
    {
        title: 'stickers',
        img: logo,
        url: 'stickers-link'
    },
    {
        title: 'stickers',
        img: logo,
        url: 'stickers-link'
    },
    {
        title: 'stickers',
        img: logo,
        url: 'stickers-link'
    },
    {
        title: 'stickers',
        img: logo,
        url: 'stickers-link'
    },
    {
        title: 'stickers',
        img: logo,
        url: 'stickers-link'
    },
    {
        title: 'stickers',
        img: logo,
        url: 'stickers-link'
    },
    {
        title: 'stickers',
        img: logo,
        url: 'stickers-link'
    },
    {
        title: 'stickers',
        img: logo,
        url: 'stickers-link'
    },
    {
        title: 'stickers',
        img: logo,
        url: 'stickers-link'
    },
    {
        title: 'stickers',
        img: logo,
        url: 'stickers-link'
    },
    {
        title: 'stickers',
        img: logo,
        url: 'stickers-link'
    },
    {
        title: 'stickers',
        img: logo,
        url: 'stickers-link'
    },
    {
        title: 'stickers',
        img: logo,
        url: 'stickers-link'
    },
    {
        title: 'stickers',
        img: logo,
        url: 'stickers-link'
    },
    {
        title: 'stickers',
        img: logo,
        url: 'stickers-link'
    },
    {
        title: 'stickers',
        img: logo,
        url: 'stickers-link'
    },
    {
        title: 'stickers',
        img: logo,
        url: 'stickers-link'
    },
]

const Stickers = props => {
    return (
        <Container>
            <Row xs={2} md={4} lg={6}>
                {content.map(item => <ContentCard content={item} />)}
            </Row>
        </Container>
    )
}

export default Stickers;