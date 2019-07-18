import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bgHeader from '../img/bg_header.png';
import brandLogo from '../img/forte logo.png';
import data from '../data';
import styled, { keyframes } from 'styled-components';
import Title from './styledComponents/Title';
import CardDeck from './CardDeck';
import RespTitle from './styledComponents/RespTitle';

export default function Home() {

  return (
    <React.Fragment>
      <Container fluid style={contStyle} className="d-flex flex-column align-items-center justify-content-center">
        <Row className="my-2">
          <Col>
            <img src={brandLogo} style={imgStyle} alt="Brand Logo" />
          </Col>
        </Row>
        <Row className="d-flex flex-column text-uppercase text-center">
          <Col>
            <MovHor>
              <RespTitle inputColor="white">{data.textosVarios.texto1}</RespTitle>
            </MovHor>
          </Col>
          <Col>
            <MovVer>
              <RespTitle inputColor="var(--mainYellow)">{data.textosVarios.texto2}</RespTitle>
            </MovVer>
          </Col>
        </Row>
      </Container>
      <Container className="text-center mt-5 mb-4">
        <RespTitle inputColor="dark">{data.titulos.title1}</RespTitle>
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
