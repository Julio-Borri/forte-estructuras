import React from 'react';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';


export default function LinksIcon(props) {
  return (
    <StyledLinks2
      className="nav-link py-3"
    >
      <i class={props.title}></i>      
    </StyledLinks2>
  )
}

const StyledLinks2 = styled(Nav.Link)`
  text-transform: uppercase;
  font-weight: 700;
  color: black !important;
  margin-left: 5px;
  border-color: white;
  border-left-style: dashed;
  @media screen and (max-width: 992px) {
    border: none;
  }
  :hover{
    color: white !important;
  }
`

