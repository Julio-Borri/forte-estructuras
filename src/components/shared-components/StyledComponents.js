import styled, { keyframes, } from 'styled-components';
import { Container, Row, Col, Nav, Navbar, } from 'react-bootstrap';
import bgJumbotron from '../../img/bgJumbotron.png';
import bgHeader from '../../img/bg_header2.png'

export const ImgResponsive = styled.img`
  height: ${props => props.normalHeight};
  @media screen and (max-width: 992px) {
    height: ${props => props.largeHeight};
  };
  @media screen and (max-width: 600px) {
    height: ${props => props.smallHeight};
  };
`

export const ResponsiveTitle = styled.h1`
  font-size: ${props => props.fontSizeHigh};
  font-weight: 700;
  text-transform: uppercase;
  color: ${props => props.inputColor || "white"};
  @media screen and (max-width: 992px) {
    font-size: ${props => props.fontSizeMedium};
  };
  @media screen and (max-width: 600px) {
    font-size: ${props => props.fontSizeSmall};
  };
`

export const StyledRow = styled(Row)`
border: 10px solid var(--mainYellow);
text-indent: 10px;
@media screen and (max-width: 600px) {
  font-size: 14px;
};
`

export const StyledH3 = styled.h3`
font-size: 35px;
@media screen and (max-width: 600px) {
font-size: 18px;
};
`

export const MainContainer = styled(Container)`
  background: url(${bgJumbotron});
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  margin-top: 80px;
  text-transform: lowercase !important;
`

const fadeInConst = keyframes`
from { opacity: 0; };
to { opacity: 1; };
`

export const FadeIn = styled.div`
animation: ${fadeInConst} ${props => props.sec} ease;
animation-iteration-count: 1;
`

export const StyledLinks = styled(Nav.Link)`
  text-transform: uppercase;
  font-weight: 700;
  color: black !important;
  margin-right: 8px;
  border-left-width: ${props => props.inputBorder || "0"};
  border-color: white;
  border-left-style: dashed;
  @media screen and (max-width: 992px) {
    border: none;
  };
  :hover{
    color: white !important;
  };
`

export const StyledLinks2 = styled(Nav.Link)`
  text-transform: uppercase;
  font-weight: 700;
  color: black !important;
  margin-left: 5px;
  border-color: white;
  border-left-style: dashed;
  @media screen and (max-width: 992px) {
    border: none;
  };
  :hover{
    color: white !important;
  };
`

export const StyledLinksIcon = styled(Nav.Link)`
text-transform: uppercase;
color: black !important;
margin-left: 5px;
@media screen and (max-width: 992px) {
  border: none;
};
:hover{
  color: ${props => props.inputColor} !important;
};
`

export const MargenTop = styled.div`
  margin-top: ${props => props.margin};
`

export const ColBg = styled(Col)`
  height: 300px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props => props.bgImage});
`

export const ColImagenServicio = styled(Col)`
  background-image: url(${props => props.picture});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 0 6px 0 black;
  font-size: 22px;
  font-weight: 700;
  height: 150px;
  :hover {
    background-image: url(${props => props.pictureColor});
    transform: scale(1.01);
    transition: transform 0.1s ease-in-out;
  };
`

export const ColImagenServicio2 = styled(Col)`
  background-image: url(${props => props.picture});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  font-size: 22px;
  font-weight: 700;
  height: 200px;
  :hover {
    box-shadow: 0 0 6px 0 black;
    transform: scale(1.01);
    transition: transform 0.1s ease-in-out;
  };
`

export const StyledDivTeamCard = styled.div`
  height: 350px;
  width: 100%;
  background-image: url(${props => props.picture});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 0 6px 0 black;
`

export const SkewedDivTeamCard = styled.div`
  border-bottom: 70px solid var(--mainYellow);
  border-left: 70px solid transparent;
  height: 100%;
`

export const NavToggle = styled(Navbar.Toggle)`
:focus { outline: none !important; };
:hover { border: 1px solid white !important; };
`

export const ContHeader = styled(Container)`
background-image: url(${bgHeader});
background-position: center;
background-repeat: no-repeat;
background-attachment: fixed;
background-size: cover;
height: 100vh;
`