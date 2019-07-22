import styled from 'styled-components';
import { Nav, Col, } from 'react-bootstrap';


import React from 'react'

export default function FooterLinks(props) {
  return (
    <Col>
      <StyledLinksIcon className="d-flex" fontSize={props.fontSize}>
        <div className="mr-2"><i class={props.item.icon}></i></div>
        <span className="text-white my-auto">{props.item.text}</span>
      </StyledLinksIcon>
    </Col>
  )
}

const StyledLinksIcon = styled(Nav.Link)`
color: var(--mainYellow);
margin-right: 20px;
font-size: ${props => props.fontSize};
:hover{
  color: white;
}
`