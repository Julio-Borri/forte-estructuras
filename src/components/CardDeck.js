import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ServiceCard from './ServiceCard';
import data from '../data';

export default function CardDeck() {
  
  const listadoDeServicios1 = data.servicios.map(item => 
    <ServiceCard item={item} />)
  
  return (
    <Container>
      <Row>
        {listadoDeServicios1}
      </Row>
    </Container>
  )
}
