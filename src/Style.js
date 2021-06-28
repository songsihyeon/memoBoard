import styled, { css } from 'styled-components';

export const TextBox = styled.textarea`
  width: 1600px;
  height: 550px;
  padding: 10px;
  margin: 0 auto;
  margin-top: 70px;
  resize: none;
  outline: none;
  font-size: 24px;
  font-weight: bold;
  font-family: 'Gaegu';
  border-radius: 10px;
  display: block;
  ${(props) =>
    props.isTitle &&
    css`
      width: 800px;
      height: 40px;
      margin: 0 auto;
      margin-top: 50px;
      text-align: center;
      font-size: 32px;
      font-weight: bold;
      font-family: 'Gaegu';
      color: #495057;
    `}
`;
