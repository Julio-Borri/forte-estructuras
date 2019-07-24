import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import NavbarForte from './components/NavbarForte';
import Home from './components/Home';
import Footer from './components/Footer';
import QuienesSomos from './components/QuienesSomos';
import ServiciosCompleto from './components/ServiciosCompleto';
import InsideProject from './components/InsideProject';
import Contact from './components/Contact';


function App() {
  return (
    <React.Fragment>
      <NavbarForte />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={QuienesSomos} />
        <Route path="/services" component={ServiciosCompleto} />
        <Route path="/project" component={InsideProject} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </React.Fragment>

  );
}

export default App;
