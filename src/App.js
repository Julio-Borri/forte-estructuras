import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import NavbarForte from './components/NavbarForte'
import Home from './components/Home'

function App() {
  return (
    <React.Fragment>
      <NavbarForte />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
