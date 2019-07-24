import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import data from '../data';
import ResponsiveTitle from './shared-components/ResponsiveTitle';
import ServiciosCompletosCard from './shared-components/ServiciosCompletosCard';
import JumbotronContact from './JumbotronContact';
import styled from 'styled-components';
import SkewedRow from './shared-components/SkewedRow';
import bgJumbotron from '../img/bgJumbotron.png';

export default function ServiciosCompleto(props) {

  const listadoCartasDeServicio = data.servicios.map(item => 
    <ServiciosCompletosCard item={item} /> )
  
    return (
    <React.Fragment >
      <MainContainer fluid>
        <Row >
          <Col className="text-center mt-5 mb-4 pb-5">
            <ResponsiveTitle
              inputColor="white"
              fontSizeHigh="50px"
              fontSizeMEdium="35px"
              fontSizeSmall="30px"
            >{data.titulos.title1}
            </ResponsiveTitle >
          </Col>
        </Row>
        <SkewedRow />
      </MainContainer>
      <Container className="my-5">
        {listadoCartasDeServicio}
      </Container>
      <JumbotronContact />
    </React.Fragment>
  )
}


const MainContainer = styled(Container)`
  background: url(${bgJumbotron});
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  padding-top: 80px;
  text-transform: lowercase !important;
`