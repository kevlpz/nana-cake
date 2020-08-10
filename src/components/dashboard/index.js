import React from 'react';
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Products from './Products';

const Dashboard = () => {
    return (
        <Tab.Container defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-row">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Account</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Products</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
            <Row>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <p>You can check out anytime you like</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <Products />
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}

export default Dashboard;