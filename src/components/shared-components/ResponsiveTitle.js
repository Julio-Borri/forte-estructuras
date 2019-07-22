import styled from 'styled-components';

const ResponsiveTitle = styled.h1`
  font-size: ${props => props.fontSizeHigh};
  font-weight: 700;
  text-transform: uppercase;
  color: ${props => props.inputColor || "white"};
  @media screen and (max-width: 992px) {
    font-size: ${props => props.fontSizeMedium};
  }
  @media screen and (max-width: 600px) {
    font-size: ${props => props.fontSizeSmall};
  }
`

export default ResponsiveTitle;