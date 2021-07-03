import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import { MdDelete } from 'react-icons/md';

const MemoItem = ({ memo, Notes }) => {
  const DeleteHandler = () => {
    console.log;
  };

  return (
    <S.ItemBox>
      <S.Title></S.Title>
      <S.Content></S.Content>
      <S.DeleteBtn>
        <MdDelete />
      </S.DeleteBtn>
    </S.ItemBox>
  );
};

export default MemoItem;
