import React from 'react';
import { Header, MemoItem, Footer } from '../../components/';
import * as S from './style';

const Main = () => {
  const getMemo = () => {
    const memoJSON = localStorage.getItem('Memo');
    try {
      return memoJSON ? JSON.parse(memoJSON) : [];
    } catch (e) {
      return [];
    }
  };

  let Memo = getMemo();

  return (
    <>
      <Header />
      <S.Position></S.Position>
      <Footer Pathes="/write" Text="New Memo" />
    </>
  );
};

export default Main;
