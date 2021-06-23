import React from 'react';
import ContentBox from './ContentBox';
import Header from './Header';
import Footer from './Footer';
import Button from '../components/Button';
import styled from 'styled-components';

const TextBox = styled.textarea`
  resize: none;
`;

function WriteMemo() {
  return (
    <ContentBox>
      <Header />
      <TextBox />

      {/* <Footer>
        <Button Text="취소" Pathes="/" />
        <Button Text="등록" Pathes="/" />
      </Footer> */}
    </ContentBox>
  );
}

export default WriteMemo;
