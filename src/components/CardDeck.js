import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ServiceCard from './ServiceCard';
import data from '../data';
import imgService1 from '../img/ServiceCard1.png';
import imgService2 from '../img/ServiceCard2.png';
import imgService3 from '../img/ServiceCard3.png';
import imgService4 from '../img/ServiceCard4.png';
import imgService5 from '../img/ServiceCard5.png';
import imgService6 from '../img/ServiceCard6.png';
import imgService7 from '../img/ServiceCard7.png';
import imgService8 from '../img/ServiceCard8.png';
import imgColorService1 from '../img/ServiceCardColor1.jpg';
import imgColorService2 from '../img/ServiceCardColor2.png';
import imgColorService3 from '../img/ServiceCardColor3.png';
import imgColorService4 from '../img/ServiceCardColor4.png';
import imgColorService5 from '../img/ServiceCardColor5.png';
import imgColorService6 from '../img/ServiceCardColor6.png';
import imgColorService7 from '../img/ServiceCardColor7.png';
import imgColorService8 from '../img/ServiceCardColor8.png';

export default function CardDeck() {
  return (
    <Container>
      <Row>
        <Col lg className="my-3">
          <ServiceCard item={data.servicios[0]} img={imgService1} imgColor={imgColorService1} />
        </Col>
        <Col lg className="my-3">
          <ServiceCard item={data.servicios[1]} img={imgService2} imgColor={imgColorService2} />
        </Col>
        <Col lg className="my-3">
          <ServiceCard item={data.servicios[2]} img={imgService3} imgColor={imgColorService3} />
        </Col>
        <Col lg className="my-3">
          <ServiceCard item={data.servicios[3]} img={imgService4} imgColor={imgColorService4} />
        </Col>
      </Row>
      <Row>
        <Col lg className="my-3">
          <ServiceCard item={data.servicios[4]} img={imgService5} imgColor={imgColorService5} />
        </Col>
        <Col lg className="my-3">
          <ServiceCard item={data.servicios[5]} img={imgService6} imgColor={imgColorService6} />
        </Col>
        <Col lg className="my-3">
          <ServiceCard item={data.servicios[6]} img={imgService7} imgColor={imgColorService7} />
        </Col>
        <Col lg className="my-3">
          <ServiceCard item={data.servicios[7]} img={imgService8} imgColor={imgColorService8} />
        </Col>
      </Row>
    </Container>
  )
}
