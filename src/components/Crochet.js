import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import logo from '../assets/logo.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios';

const content = [
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link',
        modalTitle: 'Crochet Title',
        modalContent: 'Crochet content'
    },
    {
        title: 'crochet 2',
        img: logo,
        url: 'crochet-link',
        modalTitle: 'Crochet Title',
        modalContent: 'Crochet content'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link',
        modalTitle: 'Crochet Title',
        modalContent: 'Crochet content'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link',
        modalTitle: 'Crochet Title',
        modalContent: 'Crochet content'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link',
        modalTitle: 'Crochet Title',
        modalContent: 'Crochet content'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link',
        modalTitle: 'Crochet Title',
        modalContent: 'Crochet content'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link',
        modalTitle: 'Crochet Title',
        modalContent: 'Crochet content'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link',
        modalTitle: 'Crochet Title',
        modalContent: 'Crochet content'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link',
        modalTitle: 'Crochet Title',
        modalContent: 'Crochet content'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link',
        modalTitle: 'Crochet Title',
        modalContent: 'Crochet content'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link',
        modalTitle: 'Crochet Title',
        modalContent: 'Crochet content'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link',
        modalTitle: 'Crochet Title',
        modalContent: 'Crochet content'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link',
        modalTitle: 'Crochet Title',
        modalContent: 'Crochet content'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link',
        modalTitle: 'Crochet Title',
        modalContent: 'Crochet content'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link',
        modalTitle: 'Crochet Title',
        modalContent: 'Crochet content'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link',
        modalTitle: 'Crochet Title',
        modalContent: 'Crochet content'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link',
        modalTitle: 'Crochet Title',
        modalContent: 'Crochet content'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link',
        modalTitle: 'Crochet Title',
        modalContent: 'Crochet content'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link',
        modalTitle: 'Crochet Title',
        modalContent: 'Crochet content'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link',
        modalTitle: 'Crochet Title',
        modalContent: 'Crochet content'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link',
        modalTitle: 'Crochet Title',
        modalContent: 'Crochet content'
    },
    {
        title: 'crochet',
        img: logo,
        url: 'crochet-link',
        modalTitle: 'Crochet Title',
        modalContent: 'Crochet content'
    },
]

const Crochet = props => {
    const [show, setShow] = useState(false);
    const [products, setProducts] = useState([])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        Axios.get('http://localhost:5000/products/crochet')
            .then(res => {
                console.log(res)
                setProducts(res.data)
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <Container>
            <Row xs={2} md={4} lg={6} className="justify-content-start">
                {products.map(products => {
                    return (
                        <Col>
                            <ProductCard content={products} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default Crochet;