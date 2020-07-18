import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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
                console.log(res)
                document.querySelector('#formBasicUsername').value = '';
                document.querySelector('#formBasicPassword').value = '';
                props.history.push('/')
            })
            .catch(err => console.log(err));
    }
    
    return (
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
    )
}

export default Register;