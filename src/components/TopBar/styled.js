/*----------------------------------------------------------------------------
Imports
----------------------------------------------------------------------------*/
import styled from 'styled-components';
import * as colors from '../../config/colors';

/*----------------------------------------------------------------------------
Styles
----------------------------------------------------------------------------*/
export const Nav = styled.nav`
  background: linear-gradient(
    to right,
    ${colors.primaryColor},
    ${colors.secundaryColor}
  );
  padding: 5px 40px;
  position: sticky;
  top: 0px;
  display: flex;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 5px 15px;
  }
`;

export const Title = styled.h1`
  color: ${colors.defaultColorLight};
  font-size: 18px;
  font-weight: 500;
  margin: 0 auto 0 10px;
`;

export const Username = styled.span`
  color: ${colors.defaultColorLight};
  font-size: 14px;
  font-weight: normal;
  margin-right: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;
