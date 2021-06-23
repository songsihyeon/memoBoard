import React from 'react';
import styled from 'styled-components';
import ContentBox from './ContentBox';
import Header from './Header';
import BoxItemList from '../components/BoxItemList';
import Footer from './Footer';
import Button from '../components/Button';

const SearchBox = styled.input`
  width: 30.5rem;
  height: 2.5rem;
  outline: none;
  border: none;
  text-align: center;
  font-size: 14px;
  margin-top: 20px;
  margin-left: 50px;
  border-radius: 25px;
  background: white;
  color: #e67700;
  border: 2px solid #e67700;
`;

function DrawMain() {
  return (
    <>
      <ContentBox>
        <Header />
        <SearchBox placeholder="제목으로 검색해요 🔍" />
        <BoxItemList />
        <Footer>
          <Button Text="생성" Pathes="/write" />
        </Footer>
      </ContentBox>
    </>
  );
}

export default DrawMain;
