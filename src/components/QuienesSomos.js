import React from 'react';
import AboutUs from './AboutUs';
import TeamCardGroup from './TeamCardGroup';
import JumbotronContact from './JumbotronContact';
import { MargenTop, } from './shared-components/StyledComponents';

export default function QuienesSomos() {
  return (
    <React.Fragment>
      <MargenTop margin="120px" />
      <AboutUs />
      <TeamCardGroup />
      <JumbotronContact />
    </React.Fragment>
  )
}

