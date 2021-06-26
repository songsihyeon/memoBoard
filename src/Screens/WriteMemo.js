import React from 'react';
import ContentBox from './ContentBox';
import Header from './Header';
import Footer from './Footer';
import Button from '../components/Button';
import * as S from '../Style/TextBox';

function WriteMemo() {
  return (
    <ContentBox>
      <Header />
      <S.TextBox />

      {/* <Footer>
        <Button Text="취소" Pathes="/" />
        <Button Text="등록" Pathes="/" />
      </Footer> */}
    </ContentBox>
  );
}

export default WriteMemo;
