import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import * as S from './style';

const Write = () => {
  const [Title, setTitle] = useState([]);
  const [Memo, setMemo] = useState([]);
  let [id, setId] = useState(nanoid());

  const TitleChange = (e) => {
    setTitle(e.target.value);
  };
  const MemoChange = (e) => {
    setMemo(e.target.value);
  };

  const ClickHandler = () => {
    let MemoStorageItem = localStorage.getItem('Memo');
    try {
      MemoStorageItem = MemoStorageItem ? JSON.parse(MemoStorageItem) : [];
      MemoStorageItem.push({ id, Title, Memo });
      localStorage.setItem('Memo', JSON.stringify(MemoStorageItem));
    } catch (e) {
      console.log(e);
      return [];
    }
  };

  return (
    <>
      <S.TitleBox placeholder="What is the title ?" onChange={TitleChange} />
      <S.MemoBox placeholder="What is the memo ?" onChange={MemoChange} />
      <S.BtnPosition>
        <Link to="/">
          <S.RedBtn>Cancle</S.RedBtn>
        </Link>
        <Link to="/">
          <S.DefaultBtn onClick={ClickHandler}>Create Memo</S.DefaultBtn>
        </Link>
      </S.BtnPosition>
    </>
  );
};

export default Write;
