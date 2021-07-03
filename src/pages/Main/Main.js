import React from 'react';
import { Header, MemoItem } from '../../components/';
import * as S from './style';

const Main = () => {
  return (
    <>
      <Header />
      <S.Position>
        <MemoItem>test1</MemoItem>
        <MemoItem>test2</MemoItem>
        <MemoItem>test3</MemoItem>
        <MemoItem>test4</MemoItem>
        <MemoItem>test5</MemoItem>
        <MemoItem>test6</MemoItem>
        <MemoItem>test7</MemoItem>
        <MemoItem>test8</MemoItem>
        <MemoItem>test9</MemoItem>
        <MemoItem>test10</MemoItem>
      </S.Position>
    </>
  );
};

export default Main;
