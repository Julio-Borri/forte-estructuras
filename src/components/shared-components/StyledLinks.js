import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';

const StyledLinks = styled(Nav.Link)`
  text-transform: uppercase;
  font-weight: 700;
  color: black !important;
  margin-right: 8px;
  border-left-width: ${props => props.inputBorder || "0"};
  border-color: white;
  border-left-style: dashed;
  @media screen and (max-width: 992px) {
    border: none;
  }
  :hover{
    color: white !important;
  }
`

export default StyledLinks;
