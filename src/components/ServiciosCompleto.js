import React from 'react';
import { Container, } from 'react-bootstrap';
import MargenTop from './shared-components/MargenTop';
import data from '../data';
import ResponsiveTitle from './shared-components/ResponsiveTitle';
import ServiciosCompletosCard from './shared-components/ServiciosCompletosCard';
import JumbotronContact from './JumbotronContact';

export default function ServiciosCompleto(props) {

  const listadoCartasDeServicio = data.servicios.map(item => 
    <ServiciosCompletosCard item={item} /> )
  
    return (
    <React.Fragment >
      <MargenTop margin="120px" />
      <Container className="text-center mt-5 mb-4">
        <ResponsiveTitle
          inputColor="dark"
          fontSizeHigh="50px"
          fontSizeMEdium="35px"
          fontSizeSmall="30px"
        >{data.titulos.title1}
        </ResponsiveTitle>
      </Container>
      <Container className="mb-5">
        {listadoCartasDeServicio}
      </Container>
      <JumbotronContact />
    </React.Fragment>
  )
}
