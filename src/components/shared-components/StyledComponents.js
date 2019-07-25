import styled, { keyframes, } from 'styled-components';
import { Container, Row, Nav, } from 'react-bootstrap';
import bgJumbotron from '../../img/bgJumbotron.png';


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
from { opacity: 0; }
to { opacity: 1; }
`

export const FadeIn = styled.div`
animation: ${fadeInConst} ${props => props.sec} ease;
animation-iteration-count: 1;
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

export const MargenTop = styled.div`
  margin-top: ${props => props.margin};
`