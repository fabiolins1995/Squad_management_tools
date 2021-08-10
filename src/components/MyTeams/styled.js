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
  margin: 25px;
  width: calc(100% - 50px);
  text-align: left;
  border-collapse: separate;
  border-spacing: 0px;

  th + th {
    border-left: 2px solid ${colors.defaultColorLight};
  }

  th {
    border-bottom: 15x solid #fff;
    font-weight: 500;
    cursor: pointer;
  }

  th:hover {
    background-color: ${colors.primaryLightColor};
  }

  th,
  td {
    padding: 15px;
  }

  th:first-of-type {
    border-radius: 8px 0 0 0;
  }

  td:first-of-type {
    border-radius: 8px 0 0 8px;
  }

  th:last-of-type {
    border-radius: 0 8px 0 0;
  }

  td:last-of-type {
    border-radius: 0 8px 8px 0;
  }

  td {
    border: none;
    margin: 0;
    border-bottom: 1px solid ${colors.defaultColorLight};
    font-weight: 400;
  }

  td:nth-child(3) {
    text-align: right;
  }

  td:nth-child(3) svg {
    margin-left: 15px;
    cursor: pointer;
    color: #fff;
  }

  tr:hover td,
  tr:hover td:nth-child(3) svg,
  tr:hover th {
    color: ${colors.primaryDarkColor};
  }

  tr:hover td {
    background-color: ${colors.primaryLightColor};
  }
`;
