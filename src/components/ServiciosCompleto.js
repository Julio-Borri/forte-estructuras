import React from 'react';
import { Container, Col, Row, } from 'react-bootstrap';
import MargenTop from './shared-components/MargenTop';
import data from '../data';
import ResponsiveTitle from './shared-components/ResponsiveTitle';
import styled from 'styled-components';
import ServiciosCompletosCard from './shared-components/ServiciosCompletosCard';

export default function ServiciosCompleto(props) {

  const listadoCartasDeServicio = data.servicios.map(item => 
    <ServiciosCompletosCard item={item} /> )
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

      <Container className="">
        {listadoCartasDeServicio}
      </Container>
    </React.Fragment>

  )
}

const ColImagenServicio = styled(Col)`
  height: 350px;
  width: 100%;
  background-image: url(${props => props.picture});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 0 6px 0 black;
  
`
