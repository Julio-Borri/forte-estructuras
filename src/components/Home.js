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
              <h1 className="text-white transform">{data.textosVarios.texto1}</h1>
            </MovHor>
          </Col>
          <Col>
            <MovVer>
              <h1 className="font-weight-bold ml-2" style={{ color: "var(--mainYellow)" }}>
                {data.textosVarios.texto2}
              </h1>
            </MovVer>
          </Col>
        </Row>
      </Container>
      <Title title={data.titulos.title1} />
      <Container>
        <CardDeck />
        

  
      </Container>
    </React.Fragment>
  )
}

const contStyle = {
  backgroundImage: 'url(' + bgHeader + ')',
  backgroundPosition: "center",
  height: "70vh",
}

const imgStyle = {
  height: "300px",
}

const movHorizontal = keyframes`
  from {
    transform: translateX(-700px);
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
    transform: translateX(700px);
  }
  to {
    transform: translateX(0px);
  }
`
const MovVer = styled.div`
  animation: ${movVertical} 3s ease-in-out;
  animation-iteration-count: 1;
`
