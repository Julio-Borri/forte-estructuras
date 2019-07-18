import React from 'react';
import Nav from 'react-bootstrap/Nav';

export default function Links(props) {
  return (
    <Nav.Link
      href={props.item.link} 
      className="text-capitalize font-weight-bold text-dark"
    >
      {props.item.title}
    </Nav.Link>
  )
}

