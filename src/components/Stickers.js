import React from 'react';
import ProductCard from './ProductCard';
import logo from '../assets/logo.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
                {content.map(item => {
                    return (
                        <Col>
                            <ProductCard content={item} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default Stickers;