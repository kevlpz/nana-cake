import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

const ChangePassword = () => {

    const handleSubmit = () => {
        const passwords = {
            oldPass: document.querySelector('.old-pass').value,
            newPass: document.querySelector('.new-pass').value,
            confirmPass: document.querySelector('.confirm-pass').value
        }

        axios({
            method: 'put',
            url: 'https://localhost:5000/users/:id',
            data: passwords,
            withCredentials: true
        })
            .then(res => {
                console.log(res);
                document.querySelector('.old-pass').value = '';
                document.querySelector('.new-pass').value = '';
                document.querySelector('.confirm-pass').value = '';
            })
            .catch(err => console.log(err));
    }

    return(
        <Container className="d-flex justify-content-center pt-3">
            <Row xs={1} sm={1} md={1} lg={1} xl={1}>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Old password</Form.Label>
                            <Form.Control className="old-pass" type="password" placeholder="Old password" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>New password</Form.Label>
                            <Form.Control className="new-pass" type="password" placeholder="New password" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control className="confirm-pass" type="password" placeholder="Confirm password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default ChangePassword;