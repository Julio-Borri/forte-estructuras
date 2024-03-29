import React from 'react';
import Header from './Header';
import Services from './Services';
import AboutUs from './AboutUs';
import TeamCardGroup from './TeamCardGroup';
import JumbotronContact from './JumbotronContact';

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Services />
      <TeamCardGroup />
      <AboutUs />
      <JumbotronContact />
    </React.Fragment>
  )
}

