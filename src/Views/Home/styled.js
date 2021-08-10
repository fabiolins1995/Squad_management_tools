/*----------------------------------------------------------------------------
Imports
----------------------------------------------------------------------------*/
import styled from 'styled-components';
import { Col, Row } from '../../styles/GlobalStyles';
import { Icon } from '../../components/LogoInitials/styled';

/*----------------------------------------------------------------------------
Styles
----------------------------------------------------------------------------*/
export const GroupMostLessPicked = styled.div`
  position: absolute;
  top: 0px;
  left: 5px;
  width: 100%;
  height: 100%;

  ${Row} {
    height: 100%;
    margin: 0;
  }

  ${Col} {
    margin-top: auto;
    margin-bottom: auto;
    text-align: center;
  }

  h2 {
    color: #fff;
    margin-bottom: 25px;
  }

  h3 {
    font-size: 1.35em;
    color: #fff;
    border-bottom: 1px solid;
    padding-right: 25px;

    @media (min-width: 768px) {
      position: absolute;
      top: 40%;
    }
  }

  h4 {
    color: #fff;
    text-align: left;
  }

  ${Icon} {
    margin-left: auto;
    margin-bottom: 25px;
  }
`;
