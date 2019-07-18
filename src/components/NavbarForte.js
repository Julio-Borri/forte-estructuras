import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import data from '../data';
import brandLogo from '../img/logo negro.png';
import Links from './shared-components/Links';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DropdownLinks from './shared-components/DropdownLinks';
import styled from 'styled-components';

export default function NavbarForte() {
  const linkList1 = data.dataLinks.slice(1, 2).map(
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
      fixed="top"
    >
      <Navbar.Brand href="/">
        <img src={brandLogo} alt="Brand Logo" height="20" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto text-capitalize">
          <Nav.Link
            href={data.dataLinks[0].link}
            className="text-capitalize font-weight-bold ml-1"
          >
            {data.dataLinks[0].title}
          </Nav.Link>
          {linkList1}
          <StyledDropdown
            className="text-dark font-weight-bold ml-1"
            title={data.dataLinks[2].title}
            id="collasible-nav-dropdown"
          >
            {dropdownList}
          </StyledDropdown>
          {linkList2}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

const navStyle = {
  background: "var(--mainYellow)",
  boxShadow: "0 0 6px 0 black",
}

const StyledDropdown = styled(NavDropdown)`
  border-left: 1px solid gray;
  @media screen and (max-width: 992px) {
    border: none;
  }
`