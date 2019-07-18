import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import data from '../data';
import brandLogo from '../img/logo negro.png';
import Links from './styledComponents/Links';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DropdownLinks from './styledComponents/DropdownLinks';

export default function NavbarForte() {
  const linkList1 = data.dataLinks.slice(0, 2).map(
    item => <Links key={item.id} item={item} />)
  const linkList2 = data.dataLinks.slice(3, data.dataLinks.length).map(
    item => <Links key={item.id} item={item} />)

  const dropdownList = data.servicios.map(
    item => <DropdownLinks item={item} />)

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={navStyle}
      variant="light"
      className="shadow"
      fixed="top"
    >
      <Navbar.Brand href="/">
        <img src={brandLogo} alt="Brand Logo" height="20" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto text-capitalize">
          {linkList1}
          <NavDropdown
            className="text-dark font-weight-bold"
            title={data.dataLinks[2].title}
            id="collasible-nav-dropdown"
          >
            {dropdownList}
          </NavDropdown>
          {linkList2}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

const navStyle = {
  background: "var(--mainYellow)",
}
