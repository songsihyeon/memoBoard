import React from 'react';
import * as S from '../Style';

function TextDay({ isTitle }) {
  return <S.TextBox isTitle={isTitle} placeholder="날짜를 입력해주세요.." />;
}

export default TextDay;
