import React from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { ColBg, } from './StyledComponents';

export default function ServiceModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="text-uppercase">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container >
          <Row className="text-justify">
            <ColBg xs={12} md={6} bgImage={props.imgColor} >
            </ColBg>
            <Col xs={12} md={6} className="mt-2">
              <p className="">{props.text1}</p>
              <p>{props.text2}</p>
              <Button onClick={props.onHide} variant="outline-dark" size="sm" block href="/contact"  >
                Contactanos</Button>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}
