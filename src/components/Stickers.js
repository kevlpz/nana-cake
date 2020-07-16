import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Axios from 'axios';

// const content = [
//     {
//         title: 'stickers',
//         img: logo,
//         url: 'stickers-link'
//     },
//     {
//         title: 'stickers',
//         img: logo,
//         url: 'stickers-link'
//     },
//     {
//         title: 'stickers',
//         img: logo,
//         url: 'stickers-link'
//     },
//     {
//         title: 'stickers',
//         img: logo,
//         url: 'stickers-link'
//     },
//     {
//         title: 'stickers',
//         img: logo,
//         url: 'stickers-link'
//     },
//     {
//         title: 'stickers',
//         img: logo,
//         url: 'stickers-link'
//     },
//     {
//         title: 'stickers',
//         img: logo,
//         url: 'stickers-link'
//     },
//     {
//         title: 'stickers',
//         img: logo,
//         url: 'stickers-link'
//     },
//     {
//         title: 'stickers',
//         img: logo,
//         url: 'stickers-link'
//     },
//     {
//         title: 'stickers',
//         img: logo,
//         url: 'stickers-link'
//     },
//     {
//         title: 'stickers',
//         img: logo,
//         url: 'stickers-link'
//     },
//     {
//         title: 'stickers',
//         img: logo,
//         url: 'stickers-link'
//     },
//     {
//         title: 'stickers',
//         img: logo,
//         url: 'stickers-link'
//     },
//     {
//         title: 'stickers',
//         img: logo,
//         url: 'stickers-link'
//     },
//     {
//         title: 'stickers',
//         img: logo,
//         url: 'stickers-link'
//     },
//     {
//         title: 'stickers',
//         img: logo,
//         url: 'stickers-link'
//     },
//     {
//         title: 'stickers',
//         img: logo,
//         url: 'stickers-link'
//     },
//     {
//         title: 'stickers',
//         img: logo,
//         url: 'stickers-link'
//     },
//     {
//         title: 'stickers',
//         img: logo,
//         url: 'stickers-link'
//     },
//     {
//         title: 'stickers',
//         img: logo,
//         url: 'stickers-link'
//     },
//     {
//         title: 'stickers',
//         img: logo,
//         url: 'stickers-link'
//     },
//     {
//         title: 'stickers',
//         img: logo,
//         url: 'stickers-link'
//     },
// ]

const Stickers = props => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:5000/products/stickers')
            .then(res => {
                console.log(res)
                setProducts(res.data)
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <Container>
            <Row xs={2} md={4} lg={6} className="justify-content-start">
                {products.map(product => {
                    return (
                        <Col key={product.id}>
                            <ProductCard content={product} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default Stickers;