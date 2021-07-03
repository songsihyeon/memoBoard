import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import { MdDelete } from 'react-icons/md';

const MemoItem = ({ memo, Memos }) => {
  const DeleteHandler = () => {
    console.log(memo.id);
    localStorage.setItem(
      'Memo',
      JSON.stringify(
        Memos.filter((data) => {
          return data.id !== memo.id;
        }),
      ),
    );
  };

  return (
    <S.ItemBox>
      <S.Title>{memo.Title}</S.Title>
      <S.Content>{memo.Memo}</S.Content>
      <Link to="/">
        <S.DeleteBtn onClick={DeleteHandler}>
          <MdDelete />
        </S.DeleteBtn>
      </Link>
    </S.ItemBox>
  );
};

export default MemoItem;
