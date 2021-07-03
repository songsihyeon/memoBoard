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

  let Memos = getMemo();

  return (
    <>
      <Header />
      <S.Position>
        {React.Children.toArray(
          Memos.map((data) => {
            return <MemoItem memo={data} Memos={Memos} />;
          }),
        )}
      </S.Position>
      <Footer Pathes="/write" Text="New Memo" />
    </>
  );
};

export default Main;
