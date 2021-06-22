import React from 'react';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';
import WriteMemo from '../Screens/WriteMemo';

const ButtonStyle = styled.button`
  height: 2rem;
  width: 6rem;
  font-size: 1rem;
  outline: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  color: white;
  background: #e67700;
  &:hover {
    background: white;
    color: #e67700;
    border: 1px solid #e67700;
  }
  margin-left: 24rem;
  margin-top: 1.5rem;
`;

function Button({ Text, Path }) {
  return (
    <>
      <Link to={Path}>
        <ButtonStyle>{Text}</ButtonStyle>
      </Link>
      <Route path="/write" component={WriteMemo} />
    </>
  );
}

export default Button;
