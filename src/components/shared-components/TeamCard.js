import React from 'react';
import { Col } from 'react-bootstrap';
import { StyledDivTeamCard, SkewedDivTeamCard, StyledH5, } from './StyledComponents';

const divSmall = {
  width: "100%",
  height: "350px",
  letterSpacing: "-1px",
}

export default function TeamCard(props) {
  return (
    <Col xs={12} md={6} lg={3}>
      <StyledDivTeamCard className="my-3" picture={props.item.picture} >
        <SkewedDivTeamCard>
          <div className="d-flex align-items-end justify-content-end m-auto" style={divSmall} >
            <div>
              <StyledH5
              fontSizeHigh="16px"
              fontSizeMedium="16px"
              fontSizeSmall="16px"
              className="text-dark text-capitalize font-weight-bold text-right mr-2 text-nowrap"
              >{props.item.name}
              </StyledH5>
              <StyledH5
              fontSizeHigh="16px"
              fontSizeMedium="16px"
              fontSizeSmall="16px"
              className="text-white text-uppercase font-weight-bold text-right mr-2 text-nowrap"
              >{props.item.position}
              </StyledH5>
            </div>
          </div>
        </SkewedDivTeamCard>
      </StyledDivTeamCard>
    </Col>
  )
}
