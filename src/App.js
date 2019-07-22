import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import NavbarForte from './components/NavbarForte';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <NavbarForte />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </React.Fragment>

  );
}

export default App;
