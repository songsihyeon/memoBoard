import React from 'react';
import ContentBox from './ContentBox';
import Header from './Header';
import TextBox from '../components/TextBox';
import Footer from './Footer';
import Button from '../components/Button';

function WriteMemo() {
  return (
    <ContentBox>
      <Header />
      <TextBox isTitle />
      <TextBox />
      {/* <Footer>
        <Button Text="취소" Pathes="/" />
        <Button Text="등록" Pathes="/" />
      </Footer> */}
    </ContentBox>
  );
}

export default WriteMemo;
