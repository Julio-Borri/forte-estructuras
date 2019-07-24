import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ServiceCard from './ServiceCard';
import data from '../data';

export default function CardDeck() {
  
  const listadoDeServicios1 = data.servicios.slice(0,4).map(item => 
    <ServiceCard item={item} />)
  const listadoDeServicios2 = data.servicios.slice(4,8).map(item => 
    <ServiceCard item={item} />)
  
  return (
    <Container>
      <Row>
        {listadoDeServicios1}
      </Row>
      <Row>
        {listadoDeServicios2}
      </Row>
    </Container>
  )
}
