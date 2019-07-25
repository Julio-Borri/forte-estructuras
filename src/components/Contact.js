import React from 'react';
import ContactForm from './shared-components/ContactForm';
import { ResponsiveTitle, MainContainer2, } from './shared-components/StyledComponents';
import data from '../data';
import { Container, Row, Col, } from 'react-bootstrap';
import FooterLinks from './shared-components/FooterLinks';
import SkewedRow from './shared-components/SkewedRow';

export default function Contact() {

  const listaDeContacto = data.footerIconsBig.map(item =>
    <FooterLinks item={item} fontSize="16px" className="" />)

  return (
    <React.Fragment>
      <MainContainer2 fluid>
        <Row >
          <Col className="text-center mt-5 mb-4">
            <ResponsiveTitle
              inputColor="white"
              fontSizeHigh="50px"
              fontSizeMEdium="35px"
              fontSizeSmall="30px"
            >{data.titulos.title5}
            </ResponsiveTitle >
          </Col>
        </Row>
        <Row>
          <Col className="text-center text-white">
            <h4 className="pb-2 font-italic font-weight-bold">
              por cualquiera de los siguientes medios:
            </h4 >
            <Row className="m-auto pb-4 pt-2 d-flex flex-Column justify-content-center">
              <Col xs={12} md={3} className="pb-4">
                {listaDeContacto}
              </Col>
            </Row>
          </Col>
        </Row>
        <SkewedRow />
      </MainContainer2>
      <Container>
        <Row className="text-center">
          <Col>
            <h4 className="py-3 font-italic text-center font-weight-bold">
              o escribinos a través del mensajero:
            </h4 >
          </Col>
        </Row>
        <ContactForm />
      </Container>
    </React.Fragment>
  )
}
