import React from 'react';
import Header from './Header';
import Services from './Services';
import AboutUs from './AboutUs';

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Services />
      <AboutUs />
    </React.Fragment>
  )
}

