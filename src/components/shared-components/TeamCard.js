import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';

export default function TeamCard(props) {
  return (
    <Col xs={12} md={3}>
      <StyledDiv className="my-3" picture={props.item.picture} >
        <SkewedDiv >
          <div className="d-flex align-items-end justify-content-end m-auto" style={divSmall} >
            <div>
              <h5 className="text-dark font-weight-bold text-right mr-2">{props.item.name}</h5>
              <h6 className="text-white font-weight-bold text-right text-uppercase mr-2 text-nowrap">{props.item.position}</h6>
            </div>
          </div>
        </SkewedDiv>
      </StyledDiv>
    </Col>
  )
}

const StyledDiv = styled.div`
  height: 350px;
  width: 100%;
  background-image: url(${props => props.picture});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 0 6px 0 black;
`

const SkewedDiv = styled.div`
  border-bottom: 70px solid var(--mainYellow);
  border-left: 70px solid transparent;
  height: 100%;
`

const divSmall = {
  width: "100%",
  height: "350px",
  letterSpacing: "-1px",
}
