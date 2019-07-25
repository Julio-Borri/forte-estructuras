import React from 'react';
import { Container, } from 'react-bootstrap';
import { MargenTop, ResponsiveTitle, } from './shared-components/StyledComponents';
import JumbotronContact from './JumbotronContact';

export default function InsideProject() {
  return (
    <React.Fragment>
      <MargenTop margin="120px" />
      <Container className="text-center mt-5 mb-4">
        <ResponsiveTitle
          inputColor="dark"
          fontSizeHigh="50px"
          fontSizeMEdium="35px"
          fontSizeSmall="30px"
        >"Proximamente"
        </ResponsiveTitle>
      </Container>
      <JumbotronContact />
    </React.Fragment>
  )
}
