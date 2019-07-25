import React from 'react';
import { Col } from 'react-bootstrap';
import { StyledDivTeamCard, SkewedDivTeamCard, } from './StyledComponents';

const divSmall = {
  width: "100%",
  height: "350px",
  letterSpacing: "-1px",
}

export default function TeamCard(props) {
  return (
    <Col xs={12} md={3}>
      <StyledDivTeamCard className="my-3" picture={props.item.picture} >
        <SkewedDivTeamCard>
          <div className="d-flex align-items-end justify-content-end m-auto" style={divSmall} >
            <div>
              <h5 className="text-dark font-weight-bold text-right mr-2">{props.item.name}</h5>
              <h6 className="text-white font-weight-bold text-right text-uppercase mr-2 text-nowrap">{props.item.position}</h6>
            </div>
          </div>
        </SkewedDivTeamCard>
      </StyledDivTeamCard>
    </Col>
  )
}
