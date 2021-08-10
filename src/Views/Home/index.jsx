/*----------------------------------------------------------------------------
Imports
----------------------------------------------------------------------------*/

import React from 'react';

import { Container, Row, Col } from '../../styles/GlobalStyles';
import { SoccerField } from '../../styles/SoccerField';
import MyTeams from '../../components/MyTeams';
import TopTeams from '../../components/TopTeams';
import LogoInitials from '../../components/LogoInitials';
import { GroupMostLessPicked } from './styled';

/*----------------------------------------------------------------------------
Constants
----------------------------------------------------------------------------*/
const mostPicked = 'Cristiano Ronaldo';
const mostPickedPerc = 57;
const lessPicked = 'Lionel Messi';
const lessPickedPerc = 5;

/*----------------------------------------------------------------------------
Page
----------------------------------------------------------------------------*/
export default function Home() {
  return (
    <Row>
      <Col mobile="100" default="50">
        <Container fullscreenHeight>
          <MyTeams />
        </Container>
      </Col>
      <Col mobile="100" default="50">
        <Container>
          <TopTeams />
        </Container>
        <SoccerField orientation="Landscape">
          <div className="halfField" />
          <div className="circleField" />
          <GroupMostLessPicked>
            <Row>
              <Col mobile="50" default="50">
                <h2>Most picked player</h2>
                <Row>
                  <Col mobile="50" default="50">
                    <LogoInitials
                      name={mostPicked}
                      size={100}
                      fontSize={50}
                      effect="mostPicked"
                    />
                  </Col>
                  <Col mobile="50" default="50">
                    <h3>{mostPickedPerc}%</h3>
                    <h4>{mostPicked}</h4>
                  </Col>
                </Row>
              </Col>
              <Col mobile="50" default="50">
                <h2>Less picked player</h2>
                <Row>
                  <Col mobile="50" default="50">
                    <LogoInitials
                      name={lessPicked}
                      size={100}
                      fontSize={50}
                      effect="lessPicked"
                    />
                  </Col>
                  <Col mobile="50" default="50">
                    <h3>{lessPickedPerc}%</h3>
                    <h4>{lessPicked}</h4>
                  </Col>
                </Row>
              </Col>
            </Row>
          </GroupMostLessPicked>
        </SoccerField>
      </Col>
    </Row>
  );
}
