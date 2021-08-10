/*----------------------------------------------------------------------------
Imports
----------------------------------------------------------------------------*/
import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

/*----------------------------------------------------------------------------
Styles
----------------------------------------------------------------------------*/
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background: ${colors.defaultColorLight};
    color: ${colors.defaultColorDark};
    font-family: 'Signika', sans-serif;
    font-size: 14px;
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background: linear-gradient(
    to bottom,
    ${colors.primaryDarkColor},
    ${colors.secundaryDarkColor}
  );
    border: none;
    color: #fff;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow:1px 4px 12px rgb(255 0 133 / 40%);
    transition: 300ms;
  }

  button:hover {
    opacity: .9;
    box-shadow: 1px 4px 12px rgb(255 0 133 / 60%);
  }

  button.plus {
    width: 36px;
    height: 36px;
    font-weight: 100;
    font-size: 30px;
  }

  button.block {
    width: 85%;
    height: 40px;
    font-size: 16px;
    margin-top: 20px;
    
  }

  a {
    text-decoration: none;
    color: ${colors.primaryColor};
  }

  ul {
    list-style: none;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${colors.successColor}
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: ${colors.errorColor}
  }
`;

/*----------------------------------------------------------------------------
Exports
----------------------------------------------------------------------------*/
export const Container = styled.section`
  width: 100%;
  background: #fff;
  margin-top: 25px;
  padding-bottom: 5px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  ${({ fullscreenHeight }) =>
    fullscreenHeight &&
    `
    height: calc(100vh - 130px);
    overflow-y: auto;
  `}
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 25px;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

export const Col = styled.div`
  flex: 0 0 ${(props) => props.default}%;
  padding: 0 15px;

  @media (max-width: 768px) {
    flex: 0 0 ${(props) => props.mobile}%;
  }
`;

export const Title = styled.h1`
  color: ${colors.secundaryDarkColor};
  padding: 25px;
  border: 1px solid ${colors.defaultColorLight};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Subtitle = styled.h3`
  color: #8f8f8f;
  text-align: center;
  text-transform: uppercase;
  margin: 35px 0 30px;
`;
