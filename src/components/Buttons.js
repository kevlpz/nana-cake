import React from 'react';
import ProductCard from './ProductCard';
import logo from '../assets/logo.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const content = [
    {
        title: 'buttons',
        img: logo,
        url: 'buttons-link'
    },
    {
        title: 'buttons',
        img: logo,
        url: 'buttons-link'
    },
    {
        title: 'buttons',
        img: logo,
        url: 'buttons-link'
    },
    {
        title: 'buttons',
        img: logo,
        url: 'buttons-link'
    },
    {
        title: 'buttons',
        img: logo,
        url: 'buttons-link'
    },
    {
        title: 'buttons',
        img: logo,
        url: 'buttons-link'
    },
    {
        title: 'buttons',
        img: logo,
        url: 'buttons-link'
    },
    {
        title: 'buttons',
        img: logo,
        url: 'buttons-link'
    },
    {
        title: 'buttons',
        img: logo,
        url: 'buttons-link'
    },
    {
        title: 'buttons',
        img: logo,
        url: 'buttons-link'
    },
    {
        title: 'buttons',
        img: logo,
        url: 'buttons-link'
    },
    {
        title: 'buttons',
        img: logo,
        url: 'buttons-link'
    },
    {
        title: 'buttons',
        img: logo,
        url: 'buttons-link'
    },
    {
        title: 'buttons',
        img: logo,
        url: 'buttons-link'
    },
    {
        title: 'buttons',
        img: logo,
        url: 'buttons-link'
    },
    {
        title: 'buttons',
        img: logo,
        url: 'buttons-link'
    },
    {
        title: 'buttons',
        img: logo,
        url: 'buttons-link'
    },
    {
        title: 'buttons',
        img: logo,
        url: 'buttons-link'
    },
    {
        title: 'buttons',
        img: logo,
        url: 'buttons-link'
    },
    {
        title: 'buttons',
        img: logo,
        url: 'buttons-link'
    },
    {
        title: 'buttons',
        img: logo,
        url: 'buttons-link'
    },
    {
        title: 'buttons',
        img: logo,
        url: 'buttons-link'
    },
]

const Buttons = props => {
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

export default Buttons;