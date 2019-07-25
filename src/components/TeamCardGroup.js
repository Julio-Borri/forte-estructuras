import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TeamCard from './shared-components/TeamCard';
import data from '../data';
import { ResponsiveTitle, MainContainer, } from './shared-components/StyledComponents';

export default function TeamCardGroup() {

  const listadoDeCartas = data.team.map(item =>
    <TeamCard item={item} />);

  return (
    <React.Fragment>
      <MainContainer fluid className="py-5">
        <Row>
          <Col className="text-center mb-3">
            <ResponsiveTitle
              inputColor="white"
              fontSizeHigh="50px"
              fontSizeMedium="35px"
              fontSizeSmall="30px"
            >{data.titulos.title3}
            </ResponsiveTitle>
          </Col>
        </Row>
        <Container>
          <Row>
            {listadoDeCartas}
          </Row>
        </Container>
      </MainContainer>
    </React.Fragment>
  )
}
