import React from 'react';
import StyledLinks from './StyledLinks';

export default function Links(props) {
  return (
    <StyledLinks
      href={props.item.link} 
      className="nav-link"
    >
      {props.item.title}
    </StyledLinks>
  )
}

