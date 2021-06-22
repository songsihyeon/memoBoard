import React from 'react';
import styled from 'styled-components';

const BoxHeader = styled.div`
  font-size: 52px;
  font-weight: bold;
  padding-left: 50px;
  padding-top: 80px;
  color: #495057;
`;

const TakeNotes = styled.div`
  font-size: 14px;
  font-weight: bold;
  padding-top: 20px;
`;

function Header() {
  return (
    <BoxHeader>
      Notes App
      <TakeNotes>Take notes and never forget</TakeNotes>
    </BoxHeader>
  );
}

export default Header;
