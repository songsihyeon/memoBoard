import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import { MdDelete } from 'react-icons/md';

const MemoItem = ({ children }) => {
  return (
    <S.ItemBox>
      <S.Title>{children}</S.Title>
      <S.Content>{children}</S.Content>
      <S.DeleteBtn>
        <MdDelete />
      </S.DeleteBtn>
    </S.ItemBox>
  );
};

export default MemoItem;
