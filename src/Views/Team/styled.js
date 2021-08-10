/*----------------------------------------------------------------------------
Imports
----------------------------------------------------------------------------*/
import styled from 'styled-components';
import { Col } from '../../styles/GlobalStyles';
import * as colors from '../../config/colors';

/*----------------------------------------------------------------------------
Styles
----------------------------------------------------------------------------*/
export const Form = styled.form`
  ${Col} {
    margin: 0 10%;
  }

  input[type='text'],
  textarea {
    display: flex;
    width: 80%;
    font-size: 14px;
    padding: 10px;
    border-radius: 6px;
    border: 1px solid #dadada;
    margin: 10px 0 0;
    transition: 0.3s;
  }

  input[type='text']:focus,
  textarea:focus {
    border-color: ${colors.primaryColor};
  }

  input[type='text']::placeholder,
  textarea::placeholder {
    color: #dadada;
  }

  select {
    margin-left: 15px;
    padding: 8px 40px;
    font-weight: 600;
    border: 1px solid #ccc;
    border-radius: 6px;
    cursor: pointer;
  }

  label {
    transition: 0.3s;
    font-weight: 600;
    display: block;
    margin-top: 30px;
  }

  .searchPlayerLabel {
    position: relative;
  }
  .searchPlayerLabel input {
    padding-right: 45px;
  }

  button.btnSearch {
    position: absolute;
    bottom: 0px;
    right: 25px;
    padding: 12px;
    border-radius: 6px;
  }
`;

export const Card = styled.div`
  border-radius: 6px;
  margin: 10px 0;
  background: linear-gradient(to top, #ddd, #fff);
  padding: 20px;
  border: 1px dashed #aaa;
  cursor: move;

  p {
    font-weight: 600;
  }

  span {
    font-weight: 400;
    color: ${colors.primaryColor};
  }

  .rowCard {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
`;

export const ContainerCards = styled.section`
  max-height: 500px;
  overflow-y: auto;
  padding-right: 10px;
  margin-top: 15px;

  .ddcontainersource,
  .ddcontainer {
    width: 100%;
  }
`;
