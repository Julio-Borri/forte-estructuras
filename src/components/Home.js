import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bgHeader from '../img/bg_header.png';
import brandLogo from '../img/forte logo.png';
import data from '../data';
import styled, { keyframes } from 'styled-components';
import CardDeck from './CardDeck';
import ResponsiveTitle from './styledComponents/ResponsiveTitle';

export default function Home() {
  return (
    <React.Fragment>
      <Container fluid style={contStyle} className="d-flex flex-column align-items-center justify-content-center w-100">
        <Row className="my-2">
          <Col>
            <img src={brandLogo} style={imgStyle} alt="Brand Logo" />
          </Col>
        </Row>
        <Row className="d-flex flex-column text-uppercase text-center">
          <Col>
            <MovHor>
              <ResponsiveTitle inputColor="white">{data.textosVarios.texto1}</ResponsiveTitle>
            </MovHor>
          </Col>
          <Col>
            <MovVer>
              <ResponsiveTitle inputColor="var(--mainYellow)">{data.textosVarios.texto2}</ResponsiveTitle>
            </MovVer>
          </Col>
        </Row>
      </Container>
      <Container className="text-center mt-5 mb-4">
        <ResponsiveTitle inputColor="dark">{data.titulos.title1}</ResponsiveTitle>
      </Container>
      <Container>
        <CardDeck />
      </Container>
    </React.Fragment>
  )
}

const contStyle = {
  backgroundImage: 'url(' + bgHeader + ')',
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  height: "80vh",
}

const imgStyle = {
  height: "300px",
}

const movHorizontal = keyframes`
  from {
    transform: translateX(-1000px);
  }
  to {
    transform: translateX(0px);
  }
`
const MovHor = styled.div`
  animation: ${movHorizontal} 3s ease-in-out;
  animation-iteration-count: 1;
`

const movVertical = keyframes`
  from {
    transform: translateX(1000px);
  }
  to {
    transform: translateX(0px);
  }
`
const MovVer = styled.div`
  animation: ${movVertical} 3s ease-in-out;
  animation-iteration-count: 1;
`
