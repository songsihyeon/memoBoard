import React from 'react';
import ContentBox from './ContentBox';
import Header from './Header';
import TextDay from '../components/TextDay';
import TextSection from '../components/TextSection';
import Footer from './Footer';
import Button from '../components/Button';

function WriteMemo() {
  return (
    <ContentBox>
      <Header />
      <TextDay isTitle />
      <TextSection />
      <Footer>
        <Button Text="취소" Pathes="/" />
        <Button Text="등록" Pathes="/" />
      </Footer>
    </ContentBox>
  );
}

export default WriteMemo;
