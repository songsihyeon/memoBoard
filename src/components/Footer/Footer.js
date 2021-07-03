import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

const Footer = ({ Pathes, Text }) => {
  return (
    <S.Position>
      <Link to={Pathes}>
        <S.WriteBtn>{Text}</S.WriteBtn>
      </Link>
    </S.Position>
  );
};

export default Footer;
