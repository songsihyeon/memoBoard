import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

const Footer = () => {
  return (
    <S.Position>
      <Link to="/create">
        <S.WriteBtn>New Memo</S.WriteBtn>
      </Link>
    </S.Position>
  );
};

export default Footer;
