import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ProductCard = props => {
    const [show, setShow] = useState(false);

    const { name, description, id } = props.product;

    let deleteButton
    if(props.mode === 'admin') {
        deleteButton = <Button variant="primary" onClick={() => props.handleDelete(id)}>Delete</Button>
    }
    
    return (
        <>
            <Container>
                <Card className="product-card my-3" onClick={() => setShow(true)}>
                    {/* <Card.Img variant="top" src={props.photos[0].url} /> */}
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                    </Card.Body>
                </Card>
            </Container>


            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {description}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => setShow(false)}>
                        Save Changes
                    </Button>
                    {deleteButton}
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ProductCard;