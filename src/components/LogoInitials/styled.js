/*----------------------------------------------------------------------------
Imports
----------------------------------------------------------------------------*/
import styled from 'styled-components';
import { defaultColorLight, secundaryColor } from '../../config/colors';

/*----------------------------------------------------------------------------
Styles
----------------------------------------------------------------------------*/
export const Icon = styled.span`
  background-color: ${defaultColorLight};
  color: ${secundaryColor};
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  border-radius: 50%;
  font-size: ${(props) => props.fontSize}px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  left: calc(${(props) => props.x}% - (${(props) => props.size}px / 2));
  top: calc(${(props) => props.y}% - (${(props) => props.size}px / 2));

  ${({ effect }) =>
    effect &&
    effect === 'mostPicked' &&
    `
      box-shadow: 0px 0px 50px #6a49f196;

      ::after {
      position: absolute;
      content: "";
      width: 110px;
      height: 110px;
      border: 2px dashed #AE83C7;
      border-radius: 50%;
    }
  `}

  ${({ effect }) =>
    effect &&
    effect === 'lessPicked' &&
    `
      border: 3px solid #A20862;
  `}

${({ squad }) =>
    squad &&
    `
  position: absolute;
  cursor: pointer;
  `}

${({ withoutName, squad }) =>
    withoutName &&
    squad &&
    `
  opacity: 0.7;
  ::after {
      position: absolute;
      content: "";
      width: 55px;
      height: 55px;
      border: 2px dashed #AE83C7;
      border-radius: 50%;
  `}
`;
