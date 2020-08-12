import React,{ useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import ProductCard from '../ProductCard';

const Products = () => {
    const [data, setData] = useState({products: [], photos: []});

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:5000/products',
            withCredentials: true
        })
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);
        
    return(
        <Container className="mx-auto">
            <Row xs={2} sm={2} md={3} lg={4} className="justify-content-start">
                {data.products.map(product => {
                    return (
                        <Col key={product.id}>
                            <ProductCard product={product} photos={data.photos.filter(photo => photo.productID === product.id)} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default Products;