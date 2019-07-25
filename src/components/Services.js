import React from 'react';
import { Container } from 'react-bootstrap';
import CardDeck from './CardDeck';
import { ResponsiveTitle, } from './shared-components/StyledComponents';
import data from '../data';

export default function Services() {
  return (
    <React.Fragment>
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
        <CardDeck />
      </Container>
    </React.Fragment>
  )
}
