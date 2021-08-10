/*----------------------------------------------------------------------------
Imports
----------------------------------------------------------------------------*/
import styled from 'styled-components';
import * as colors from '../config/colors';

/*----------------------------------------------------------------------------
Exports
----------------------------------------------------------------------------*/
export const SoccerField = styled.div`
  background: linear-gradient(
    to bottom,
    ${colors.primaryDarkColor},
    ${colors.secundaryDarkColor}
  );
  width: 90%;
  height: 600px;
  border-radius: 5px;
  margin-top: 25px;
  right: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;

  div.halfField {
    width: 100%;
    height: 50%;
    border: none;
    border-bottom: 1px solid #fff5;
  }

  div.circleField {
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 1px solid #fff5;
    top: calc(50% - 40px);
    left: calc(50% - 40px);
  }

  ${({ orientation }) =>
    orientation &&
    orientation === 'Landscape' &&
    `
      width: 100%;
      margin: 15px;
      height: 300px;

      div.halfField {
        width: 50%;
        height: 100%;
        border-right: 1px solid #fff5;
      }
  `}
`;
