import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Axios from 'axios';

// const content = [
//     {
//         title: 'crochet',
//         img: logo,
//         url: 'crochet-link',
//         modalTitle: 'Crochet Title',
//         modalContent: 'Crochet content'
//     },
//     {
//         title: 'crochet 2',
//         img: logo,
//         url: 'crochet-link',
//         modalTitle: 'Crochet Title',
//         modalContent: 'Crochet content'
//     },
//     {
//         title: 'crochet',
//         img: logo,
//         url: 'crochet-link',
//         modalTitle: 'Crochet Title',
//         modalContent: 'Crochet content'
//     },
//     {
//         title: 'crochet',
//         img: logo,
//         url: 'crochet-link',
//         modalTitle: 'Crochet Title',
//         modalContent: 'Crochet content'
//     },
//     {
//         title: 'crochet',
//         img: logo,
//         url: 'crochet-link',
//         modalTitle: 'Crochet Title',
//         modalContent: 'Crochet content'
//     },
//     {
//         title: 'crochet',
//         img: logo,
//         url: 'crochet-link',
//         modalTitle: 'Crochet Title',
//         modalContent: 'Crochet content'
//     },
//     {
//         title: 'crochet',
//         img: logo,
//         url: 'crochet-link',
//         modalTitle: 'Crochet Title',
//         modalContent: 'Crochet content'
//     },
//     {
//         title: 'crochet',
//         img: logo,
//         url: 'crochet-link',
//         modalTitle: 'Crochet Title',
//         modalContent: 'Crochet content'
//     },
//     {
//         title: 'crochet',
//         img: logo,
//         url: 'crochet-link',
//         modalTitle: 'Crochet Title',
//         modalContent: 'Crochet content'
//     },
//     {
//         title: 'crochet',
//         img: logo,
//         url: 'crochet-link',
//         modalTitle: 'Crochet Title',
//         modalContent: 'Crochet content'
//     },
//     {
//         title: 'crochet',
//         img: logo,
//         url: 'crochet-link',
//         modalTitle: 'Crochet Title',
//         modalContent: 'Crochet content'
//     },
//     {
//         title: 'crochet',
//         img: logo,
//         url: 'crochet-link',
//         modalTitle: 'Crochet Title',
//         modalContent: 'Crochet content'
//     },
//     {
//         title: 'crochet',
//         img: logo,
//         url: 'crochet-link',
//         modalTitle: 'Crochet Title',
//         modalContent: 'Crochet content'
//     },
//     {
//         title: 'crochet',
//         img: logo,
//         url: 'crochet-link',
//         modalTitle: 'Crochet Title',
//         modalContent: 'Crochet content'
//     },
//     {
//         title: 'crochet',
//         img: logo,
//         url: 'crochet-link',
//         modalTitle: 'Crochet Title',
//         modalContent: 'Crochet content'
//     },
//     {
//         title: 'crochet',
//         img: logo,
//         url: 'crochet-link',
//         modalTitle: 'Crochet Title',
//         modalContent: 'Crochet content'
//     },
//     {
//         title: 'crochet',
//         img: logo,
//         url: 'crochet-link',
//         modalTitle: 'Crochet Title',
//         modalContent: 'Crochet content'
//     },
//     {
//         title: 'crochet',
//         img: logo,
//         url: 'crochet-link',
//         modalTitle: 'Crochet Title',
//         modalContent: 'Crochet content'
//     },
//     {
//         title: 'crochet',
//         img: logo,
//         url: 'crochet-link',
//         modalTitle: 'Crochet Title',
//         modalContent: 'Crochet content'
//     },
//     {
//         title: 'crochet',
//         img: logo,
//         url: 'crochet-link',
//         modalTitle: 'Crochet Title',
//         modalContent: 'Crochet content'
//     },
//     {
//         title: 'crochet',
//         img: logo,
//         url: 'crochet-link',
//         modalTitle: 'Crochet Title',
//         modalContent: 'Crochet content'
//     },
//     {
//         title: 'crochet',
//         img: logo,
//         url: 'crochet-link',
//         modalTitle: 'Crochet Title',
//         modalContent: 'Crochet content'
//     },
// ]

const AllProducts = props => {
    const [data, setData] = useState({
        products: [],
        photos: []
    });

    useEffect(() => {
        Axios.get('http://localhost:5000/products')
            .then(res => {
                setData(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const { products, photos } = data;
    return (
        <Container>
            <Row xs={1} sm={2} md={3} lg={4} className="justify-content-start">
                {products.map(product => {
                    return (
                        <Col key={product.id}>
                            <ProductCard product={product} photos={photos.filter(photo => photo.productID === product.id)} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default AllProducts;