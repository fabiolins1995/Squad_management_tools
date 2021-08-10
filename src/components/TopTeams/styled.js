/*----------------------------------------------------------------------------
Imports
----------------------------------------------------------------------------*/
import styled from 'styled-components';
import * as colors from '../../config/colors';

/*----------------------------------------------------------------------------
Styles
----------------------------------------------------------------------------*/
export const Table = styled.table`
  color: ${colors.defaultColorDark};
  width: 100%;
  background-color: ${colors.defaultColor};
  border-radius: 8px;
  padding: 1px 3px;
  border-collapse: separate;
  border-spacing: 0px 2px;
  margin-bottom: 15px;

  td {
    padding: 10px 15px;
    background-color: #fff;
    cursor: pointer;
  }

  td:first-of-type {
    border-radius: 8px 0 0 8px;
    font-weight: 300;
  }

  td:last-of-type {
    border-radius: 0 8px 8px 0;
    font-weight: 600;
    text-align: right;
  }

  tr td {
    border-top: 1px solid ${colors.defaultColor};
    border-bottom: 1px solid ${colors.defaultColor};
  }

  tr td:first-of-type {
    border-left: 1px solid ${colors.defaultColor};
  }

  tr td:last-of-type {
    border-right: 1px solid ${colors.defaultColor};
  }

  tr:hover td {
    border-color: ${colors.primaryColor};
  }
`;

export const TitleTable = styled.h4`
  font-weight: 500;
  margin-bottom: 10px;
`;
