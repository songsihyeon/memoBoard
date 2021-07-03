import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

const Header = () => {
  return (
    <S.BoxHeader>
      <Link to="/">
        <S.Title>MEMO BOARD</S.Title>
      </Link>
    </S.BoxHeader>
  );
};

export default Header;
