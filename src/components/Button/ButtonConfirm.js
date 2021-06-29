import React from 'react';
import * as S from './ButtonStyle';
import { Link } from 'react-router-dom';

function ButtonConfirm({ Text, Pathes }) {
  return (
    <>
      <Link to={Pathes}>
        <S.ButtonStyle>{Text}</S.ButtonStyle>
      </Link>
    </>
  );
}

export default ButtonConfirm;
