import React from 'react';
import ContactForm from './shared-components/ContactForm';
import MargenTop from './shared-components/MargenTop';
import ResponsiveTitle from './shared-components/ResponsiveTitle';
import data from '../data';
import { Container, } from 'react-bootstrap';

export default function Contact() {
  return (
    <React.Fragment>
      <MargenTop margin="120px" />
      <Container className="text-center mt-5 mb-4">
        <ResponsiveTitle
          inputColor="dark"
          fontSizeHigh="50px"
          fontSizeMEdium="35px"
          fontSizeSmall="30px"
        >{data.titulos.title5}
        </ResponsiveTitle >
      </Container>

      <ContactForm />
    </React.Fragment>
  )
}
