import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TeamCard from './shared-components/TeamCard';
import styled from 'styled-components';
import data from '../data';
import bgContainer from '../img/bgTeam.png';
import { ResponsiveTitle, } from './shared-components/StyledComponents';

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

const MainContainer = styled(Container)`
  background: url(${bgContainer});
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  margin: 80px 0;
`