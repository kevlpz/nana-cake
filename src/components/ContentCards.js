import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContentCard from './ContentCard';

const ContentCards = () => {
    return (
        <Container className="content-cards-container">
            <Row xs={1} md={3} lg={3}>
                <ContentCard />
                <ContentCard />
                <ContentCard />
            </Row>
        </Container>
    )
}

export default ContentCards;