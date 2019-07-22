import React from 'react';
import { Navbar, Nav, } from 'react-bootstrap';
import data from '../data';
import brandLogo from '../img/logoWideNegro.png';
import Links from './shared-components/Links';
import styled from 'styled-components';
import StyledLinksIcon from './shared-components/StyledLinksIcon';

export default function NavbarForte() {
  const linkList = data.dataLinks.slice(1, 5).map(
    item => <Links key={item.id} item={item} border={"0px"} />)

  return (
      <Navbar
        collapseOnSelect
        expand="lg"
        style={navStyle}
        variant="light"
        fixed="top"
      >
        <Navbar.Brand href="/">
          <ImgResponsive src={brandLogo} alt="Brand Logo" />
        </Navbar.Brand>
        <NavToggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Links
              item={data.dataLinks[0]}
            />
            {linkList}
            <StyledLinksIcon inputColor="#3b5998"><i class="fab fa-facebook fa-2x mt-1"></i></StyledLinksIcon>
            <StyledLinksIcon inputColor="#25D366"><i class="fab fa-whatsapp fa-2x mt-1"></i></StyledLinksIcon>
            <StyledLinksIcon inputColor="white"><i class="fas fa-phone fa-2x mt-1"></i></StyledLinksIcon>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
}

const navStyle = {
  background: "var(--mainYellow)",
  boxShadow: "0 0 6px 0 black",

}

const NavToggle = styled(Navbar.Toggle)`
:focus { outline: none !important; }
:hover { border: 1px solid white !important; }
`

const ImgResponsive = styled.img`
  height: 60px;
  @media screen and (max-width: 992px) {
    height: 50px;
  }
  @media screen and (max-width: 600px) {
    height: 40px;
  }
`



