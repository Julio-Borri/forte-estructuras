import React from 'react';
import { Container, Col, Row, } from 'react-bootstrap';
import MargenTop from './shared-components/MargenTop';
import data from '../data';
import ResponsiveTitle from './shared-components/ResponsiveTitle';
import styled from 'styled-components';

export default function ServiciosCompleto() {
 
  return (
    <React.Fragment>
      <MargenTop margin="100px" />
      <Container className="text-center mt-5 mb-4">
        <ResponsiveTitle
          inputColor="dark"
          fontSizeHigh="50px"
          fontSizeMEdium="35px"
          fontSizeSmall="30px"
        >{data.titulos.title1}
        </ResponsiveTitle>
      </Container>
      <Container>
        <Row>
          <ColImagenServicio>
            <img src={data.servicios[0].img} />
          </ColImagenServicio>
          <Col>
          
          </Col>
        </Row>
      </Container>
    </React.Fragment>

  )
}

const ColImagenServicio = styled(Col)`
  height: 300px;
  width: 300px;
  border: 3px solid black;
`