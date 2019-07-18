import styled from 'styled-components';

const StyledLinks = styled.a`
  text-transform: capitalize;
  font-weight: 700;
  color: "dark";
  margin-left: 3px;
  border-left: 1px solid gray;
  @media screen and (max-width: 992px) {
    border: none;
  }
`

export default StyledLinks;