import React from 'react';
import { Navbar, Nav, ButtonToolbar, OverlayTrigger, Tooltip, } from 'react-bootstrap';
import data from '../data';
import brandLogo from '../img/logoWideNegro.png';
import Links from './shared-components/Links';
import { StyledLinksIcon, ImgResponsive, NavToggle, } from './shared-components/StyledComponents';

const navStyle = {
  background: "var(--mainYellow)",
  boxShadow: "0 0 6px 0 black",
}

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
        <ImgResponsive src={brandLogo} alt="Brand Logo" normalHeight="60px" mediumHeight="50px" smallHeight="40px" />
      </Navbar.Brand>
      <NavToggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Links item={data.dataLinks[0]} />
          {linkList}
          <StyledLinksIcon inputColor="white" href="https://www.facebook.com/FORTEstructuras/" >
            <i class="fab fa-facebook fa-2x mt-1"></i>
          </StyledLinksIcon>
          <StyledLinksIcon inputColor="white" href="https://wa.me/5493571323500">
            <i class="fab fa-whatsapp fa-2x mt-1"></i>
          </StyledLinksIcon>
          <ButtonToolbar>
            <OverlayTrigger key='bottom' placement='bottom'
              overlay={
                <Tooltip id={`tooltip-$'bottom'`}>
                  <strong>03571 - 643736</strong>
                </Tooltip>
              }
            >
              <StyledLinksIcon inputColor="white"><i class="fas fa-phone-square-alt fa-2x mt-1"></i></StyledLinksIcon>
            </OverlayTrigger>
          </ButtonToolbar>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}







