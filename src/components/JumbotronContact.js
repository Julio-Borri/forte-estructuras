import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Button } from 'react-bootstrap';
import bgJumbotron from '../img/bgJumbotron.png';
import ResponsiveTitle from './shared-components/ResponsiveTitle';
import data from '../data';

export default function JumbotronContact() {
  return (
    <React.Fragment>
      <MainContainer fluid>
          <Row>
            <Col className="text-center">
              <ResponsiveTitle className="text-capitalize font-italic p-5"
                inputColor="white"
                fontSizeHigh="50px"
                fontSizeMedium="35px"
                fontSizeSmall="30px"
              >{data.dataForte.slogan}
              </ResponsiveTitle>
            </Col>
          </Row>
          <Row>
            <SkewedDiv2></SkewedDiv2>
            <SkewedDiv1></SkewedDiv1>
          </Row>
      </MainContainer>
      <Container>
        <Row className="m-auto text-center" style={{width: "300px"}}>
          <Col className="text-center my-2">
            <p className="mt-2">{data.textosVarios.texto9}</p>
            <Button variant="outline-dark font-weight-bold" size="sm">Contacto</Button>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

const MainContainer = styled(Container)`
  background: url(${bgJumbotron});
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  margin-top: 80px;
  text-transform: lowercase !important;
`
const SkewedDiv1 = styled(Col)`
  border-bottom: 30px solid white;
  border-left: 30px solid transparent;
  height: 100%;
`
const SkewedDiv2 = styled(Col)`
  border-bottom: 30px solid white;
  border-right: 30px solid transparent;
  height: 100%;
`