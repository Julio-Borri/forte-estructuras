import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';

const StyledLinksIcon = styled(Nav.Link)`
text-transform: uppercase;
color: black !important;
margin-left: 5px;
@media screen and (max-width: 992px) {
  border: none;
}
:hover{
  color: ${props => props.inputColor} !important;
}
`



export default StyledLinksIcon;
