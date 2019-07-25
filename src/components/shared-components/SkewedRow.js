import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const SkewedDiv1 = styled(Col)`
  border-bottom: 30px solid white;
  border-left: 30px solid transparent;
  height: 100%;
`
const SkewedDiv2 = styled(Col)`
  border-bottom: 30px solid white;
  border-right: 30px solid transparent;
  height: 100%;
`

export default function SkewedRow() {
  return (
    <Row>
      <SkewedDiv2></SkewedDiv2>
      <SkewedDiv1></SkewedDiv1>
    </Row>
  )
}

