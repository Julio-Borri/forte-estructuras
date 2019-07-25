import React from 'react';
import StyledLinks2 from './StyledComponents';

export default function LinksIcon(props) {
  return (
    <StyledLinks2
      className="nav-link py-3"
    >
      <i class={props.title}></i>
    </StyledLinks2>
  )
}

