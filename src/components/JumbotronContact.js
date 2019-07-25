import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import data from '../data';
import SkewedRow from './shared-components/SkewedRow';
import { MainContainer, ResponsiveTitle, } from './shared-components/StyledComponents';

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
          <SkewedRow />
      </MainContainer>
      <Container>
        <Row className="m-auto text-center" style={{width: "300px"}}>
          <Col className="text-center my-2">
            <p className="mt-2">{data.textosVarios.texto9}</p>
            <Button variant="outline-dark font-weight-bold" size="sm" href="/contact">Contacto</Button>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

