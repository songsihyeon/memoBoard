import React from 'react';
import { Header, Write, Footer } from '../../components/';
import * as S from './style';

const CreateMemo = () => {
  return (
    <>
      <Header />
      <S.Position>
        <Write />
      </S.Position>
      {/* <Footer Pathes="/" Text="Main Page" /> */}
    </>
  );
};

export default CreateMemo;
