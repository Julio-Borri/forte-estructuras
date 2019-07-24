import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ServiceCard2 from './ServiceCard2';
import data from '../data';

export default function CardDeck() {
  
  const listadoDeServicios1 = data.servicios.map(item => 
    <ServiceCard2 item={item} />)
  
  return (
    <Container>
      <Row>
        {listadoDeServicios1}
      </Row>
    </Container>
  )
}
