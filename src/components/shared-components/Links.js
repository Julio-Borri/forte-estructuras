import React from 'react';
import StyledLinks from './StyledLinks';

export default function Links(props) {
  return (
    <StyledLinks
      inputBorder={props.border}
      href={props.item.link} 
      className="nav-link py-3"
    >
      {props.item.title}
    </StyledLinks>
  )
}



