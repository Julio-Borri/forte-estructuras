import React from 'react';
import { Row, Col } from 'react-bootstrap';
import data from '../data';
import { ResponsiveTitle, ImgResponsive, FadeIn, ContHeader, } from './shared-components/StyledComponents';
import brandLogo from '../img/forte-estructuras logo plano.png';

export default function Header() {
  return (
    <ContHeader fluid className="d-flex flex-column align-items-center justify-content-center w-100">
      <Row className="mb-2">
        <Col>
          <ImgResponsive src={brandLogo} alt="Brand Logo" normalHeight="300px" mediumHeight="250px" smallHeight="200px" />
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
    </ContHeader>
  )
}

