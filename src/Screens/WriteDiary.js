import React from 'react';
import ContentBox from './ContentBox';
import Header from './Header';
import TextDay from '../components/TextArea/TextDay';
import TextSection from '../components/TextArea/TextSection';
import Footer from './Footer';
import ButtonCancle from '../components/Button/ButtonCancel';
import ButtonConfirm from '../components/Button/ButtonConfirm';

function WriteDiary({ day, content, onChange, onCreate }) {
  return (
    <ContentBox>
      <Header />
      <TextDay isTitle />
      <TextSection />
      <Footer>
        <ButtonCancle Text="취소" Pathes="/" />
        <ButtonConfirm Text="등록" Pathes="/" />
      </Footer>
    </ContentBox>
  );
}

export default WriteDiary;
