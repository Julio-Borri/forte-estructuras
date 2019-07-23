import React from 'react';
import ResponsiveTitle from './shared-components/ResponsiveTitle';
import data from '../data';
import { Container, Row, Col } from 'react-bootstrap';
import brandLogo from '../img/forte logo.png';
import styled from 'styled-components';


export default function AboutUs() {
  return (
    <React.Fragment>
      <Container className="text-center mt-5 mb-4">
        <Row className="mb-2">
          <Col className="mb-2">
            <ResponsiveTitle
              inputColor="dark"
              fontSizeHigh="50px"
              fontSizeMedium="35px"
              fontSizeSmall="30px"
            >{data.titulos.title4}
            </ResponsiveTitle>
          </Col>
        </Row>
        <StyledRow className="p-3 text-justify m-1">
          <Col md={9} xs={12}>
            <p>{data.textosVarios.texto3}</p><p>{data.textosVarios.texto4}</p>           
            <p>{data.textosVarios.texto5}</p><p>{data.textosVarios.texto6}</p>          
            <p>{data.textosVarios.texto7}</p><p>{data.textosVarios.texto8}</p>          
          </Col>
          <Col md={3} xs={12} className="d-flex align-items-center justify-content-center">
            <ImgResponsive src={brandLogo} alt="Brand Logo" />
          </Col>
        </StyledRow>
      </Container>
    </React.Fragment>
  )
}

const StyledRow = styled(Row)`
  border: 10px solid var(--mainYellow);
  text-indent: 10px;
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`

const ImgResponsive = styled.img`
  height: 300px;
  @media screen and (max-width: 992px) {
    height: 250px;
  };
  @media screen and (max-width: 600px) {
    height: 200px;
  };
`