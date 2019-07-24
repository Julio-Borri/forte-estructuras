import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import styled from 'styled-components';
import brandLogoFE from '../img/forte-estructuras logo plano.png';
import data from '../data';
import FooterLinks from './shared-components/FooterLinks';
import BrandLogo from './shared-components/BrandLogo';

export default function Footer() {

  const iconList1 = data.footerIconsBig.map(item =>
    <FooterLinks item={item} fontSize="16px" />);

  const iconList2 = data.footerIconsSmall.slice(0, 4).map(item =>
    <FooterLinks item={item} fontSize="14px" />);

  const iconList3 = data.footerIconsSmall.slice(4, 9).map(item =>
    <FooterLinks item={item} fontSize="14px" />);

  return (
    <React.Fragment>
      <Container fluid style={footerStyle} className="mt-5">
        <Row>
          <Col xs={12} md={3} className="d-flex justify-content-center py-4">
              <a href="/"><ImgResponsive src={brandLogoFE} alt="Brand Logo" /></a>
          </Col>
          <Col xs={12} md={3} className="d-flex justify-content-center py-3">
            <Row className="d-flex flex-column text-white">
              {iconList1}
            </Row>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center py-3">
            <Row>
              <Col xs={6} md={6}>
                <Row className="d-flex flex-column text-white">
                  {iconList2}
                </Row>
              </Col>
              <Col xs={6} md={6}>
                <Row className="d-flex flex-column text-white">
                  {iconList3}
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid style={{background: "black"}}>
        <Row>
          <Col xs={12} md={6} className="text-white text-center d-flex align-items-center justify-content-center py-2">
            <span>FORTE ESTRUCTURAS | all rights reserved © </span>
          </Col>
          <Col xs={12} md={6} className="text-white text-center d-flex align-items-center justify-content-center py-2">
            <span className="mr-2 font-italic">
              developed by
            </span>
            <BrandLogo />
          </Col>
        </Row>
        
      </Container>

    </React.Fragment>
  )
}

const footerStyle = {
  background: "var(--mainGray)",
}

const ImgResponsive = styled.img`
  height: 150px;
  @media screen and (max-width: 992px) {
    height: 125px;
  }
  @media screen and (max-width: 600px) {
    height: 125px;
  }
`
