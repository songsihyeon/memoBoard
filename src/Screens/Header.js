import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BoxHeader = styled.div`
  background: none;
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e67700;
`;

const Title = styled.div`
  font-size: 88px;
  font-weight: bold;
  font-family: 'Gaegu';
  color: #e67700;
  margin-top: 30px;
  margin-left: 700px;
  display: inline;
`;

const SubTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
  font-family: 'Gaegu';
  color: #e67700;
  padding-left: 10px;
  margin-top: 60px;
  display: inline;
`;

function Header({ children }) {
  return (
    <BoxHeader>
      <Link to="/">
        <Title>DD</Title>
        <SubTitle>Daily Diary</SubTitle>
      </Link>
      {children}
    </BoxHeader>
  );
}

export default Header;
