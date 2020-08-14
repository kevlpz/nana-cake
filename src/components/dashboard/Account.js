import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ChangePassword from './ChangePassword';

const Account = () => {
    return (
        <Accordion className="dashboard-account-accordion">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    Change password
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <ChangePassword />
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                    Click me!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

export default Account;