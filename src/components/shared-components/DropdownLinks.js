import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function DropdownLinks(props) {
  return (
    <NavDropdown.Item
      href="/"
    >{props.item.title}     
    </NavDropdown.Item>
  )
}

