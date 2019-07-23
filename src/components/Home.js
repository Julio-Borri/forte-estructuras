import React from 'react';
import Header from './Header';
import Services from './Services';
import AboutUs from './AboutUs';
import TeamCardGroup from './TeamCardGroup';

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Services />
      <AboutUs />
      <TeamCardGroup />
    </React.Fragment>
  )
}

