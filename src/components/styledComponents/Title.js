import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

export default function Title(props) {
  return (
    <Container className="pt-5">
      <Row>
        <Col>
          <RespTitle inputColor={props.color} className="text-center text-dark">{props.title}</RespTitle>
        </Col>
      </Row>
    </Container>
  )
}

const RespTitle = styled.h1`
  font-size: 50px;
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