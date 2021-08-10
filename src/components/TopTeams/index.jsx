/*----------------------------------------------------------------------------
Imports
----------------------------------------------------------------------------*/
import React from 'react';
import { useSelector } from 'react-redux';

import { Row, Col, Title } from '../../styles/GlobalStyles';
import { Table, TitleTable } from './styled';

/*----------------------------------------------------------------------------
Functions
----------------------------------------------------------------------------*/
export default function TopTeams() {
  const { teams } = useSelector((state) => state.teams);

  return (
    <>
      <Title>Top 5</Title>
      <Row>
        <Col default="50" mobile="100">
          <TitleTable>Highest avg age</TitleTable>
          <Table>
            <tbody>
              {teams.slice(0, 4).map((team) => (
                <tr key={team.id}>
                  <td>{team.teamName}</td>
                  <td>31.9</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col default="50" mobile="100">
          <TitleTable>Lowest avg age</TitleTable>
          <Table>
            <tbody>
              {teams.slice(0, 4).map((team) => (
                <tr key={team.id}>
                  <td>{team.teamName}</td>
                  <td>31.9</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}
