import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import data from '../data';
import { ResponsiveTitle, } from './shared-components/StyledComponents';
import bgHeader from '../img/bg_header2.png';
import brandLogo from '../img/forte-estructuras logo plano.png';
import { FadeIn, } from './shared-components/StyledComponents';
import styled from 'styled-components';

export default function Header() {
  return (
    <Container fluid style={contStyle} className="d-flex flex-column align-items-center justify-content-center w-100">
        <Row className="mb-2">
          <Col>
            <ImgResponsive src={brandLogo} alt="Brand Logo" />
          </Col>
        </Row>
        <Row className="d-flex flex-column text-uppercase text-center">
          <Col>
            <FadeIn sec="2s">
              <ResponsiveTitle
                inputColor="white"
                fontSizeHigh="60px"
                fontSizeMEdium="40px"
                fontSizeSmall="35px"
              >{data.textosVarios.texto1}
              </ResponsiveTitle>
            </FadeIn>
          </Col>
          <Col>
            <FadeIn sec="6s">
              <ResponsiveTitle
                inputColor="var(--mainYellow)"
                fontSizeHigh="60px"
                fontSizeMEdium="40px"
                fontSizeSmall="35px"
              >{data.textosVarios.texto2}
              </ResponsiveTitle>
            </FadeIn>
          </Col>
        </Row>
      </Container>
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