import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Axios from 'axios';

const Register = props => {
    const handleSubmit = e => {
        e.preventDefault();
        const newUser = {
            username: document.querySelector('#formBasicUsername').value,
            password: document.querySelector('#formBasicPassword').value
        }
        Axios.post('http://localhost:5000/users/register', newUser)
            .then(res => {
                document.querySelector('#formBasicUsername').value = '';
                document.querySelector('#formBasicPassword').value = '';
                props.history.push('/')
            })
            .catch(err => console.log(err));
    }
    
    return (
        <Container className="d-flex justify-content-center pt-3">
            <Row xs={1} sm={1} md={1} lg={1} xl={1}>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
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

export default Register;