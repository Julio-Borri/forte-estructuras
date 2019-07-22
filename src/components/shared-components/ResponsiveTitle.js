import styled from 'styled-components';

const ResponsiveTitle = styled.h1`
  font-size: 60px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${props => props.inputColor || "white"};
  @media screen and (max-width: 992px) {
    font-size: 40px;
  }
  @media screen and (max-width: 600px) {
    font-size: 35px;
  }
`

export default ResponsiveTitle;