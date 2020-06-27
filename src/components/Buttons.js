import React from 'react';
import ContentCard from './ContentCard';
import logo from '../assets/logo.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

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
                {content.map(item => <ContentCard content={item} />)}
            </Row>
        </Container>
    )
}

export default Buttons;