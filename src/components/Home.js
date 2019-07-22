import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import bgHeader from '../img/bg_header2.png';
import brandLogo from '../img/forte-estructuras logo plano.png';
import data from '../data';
import CardDeck from './CardDeck';
import ResponsiveTitle from './shared-components/ResponsiveTitle';
import FadeIn from './shared-components/FadeIn';
import styled from 'styled-components';


export default function Home() {
  return (
    <React.Fragment>
      <Container fluid style={contStyle} className="d-flex flex-column align-items-center justify-content-center w-100">
        <Row className="mb-2">
          <Col>
            <ImgResponsive src={brandLogo} alt="Brand Logo" />
          </Col>
        </Row>
        <Row className="d-flex flex-column text-uppercase text-center">
          <Col>
            <FadeIn sec="2s">
              <ResponsiveTitle inputColor="white">{data.textosVarios.texto1}</ResponsiveTitle>
            </FadeIn>
          </Col>
          <Col>
            <FadeIn sec="6s">
              <ResponsiveTitle inputColor="var(--mainYellow)">{data.textosVarios.texto2}</ResponsiveTitle>
            </FadeIn>
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
  height: "100vh",
}

const ImgResponsive = styled.img`
  height: 300px;
  @media screen and (max-width: 992px) {
    height: 250px;
  }
  @media screen and (max-width: 600px) {
    height: 200px;
  }
`
