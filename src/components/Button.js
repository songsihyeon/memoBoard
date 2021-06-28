import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonStyle = styled.button`
  height: 50px;
  width: 200px;
  font-size: 24px;
  font-weight: bold;
  font-family: 'Gaegu';
  outline: none;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: white;

  background: white;
  color: #495057;
  border: 2px solid #495057;

  &:hover {
    background: #495057;
    color: white;
  }
  &:not(:first-child) {
    margin-left: 30px;
  }
`;

function Button({ Text, Pathes }) {
  return (
    <>
      <Link to={Pathes}>
        <ButtonStyle>{Text}</ButtonStyle>
      </Link>
    </>
  );
}

export default Button;
