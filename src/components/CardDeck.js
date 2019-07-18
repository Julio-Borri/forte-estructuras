import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ServiceCard from './styledComponents/ServiceCard';
import data from '../data';


export default function CardDeck() {
  return (
    <Container>
      <Row className="my-3">
        <Col lg className="my-3">
          <ServiceCard title={data.servicios[0].title} />
        </Col>
        <Col lg className="my-3">
          <ServiceCard title={data.servicios[1].title} />
        </Col>
        <Col lg className="my-3">
          <ServiceCard title={data.servicios[2].title} />
        </Col>
        <Col lg className="my-3">
          <ServiceCard title={data.servicios[3].title} />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col lg className="my-3">
          <ServiceCard title={data.servicios[4].title} />
        </Col>
        <Col lg className="my-3">
          <ServiceCard title={data.servicios[5].title} />
        </Col>
        <Col lg className="my-3">
          <ServiceCard title={data.servicios[6].title} />
        </Col>
        <Col lg className="my-3">
          <ServiceCard title={data.servicios[7].title} />
        </Col>
      </Row>
    </Container>
  )
}
