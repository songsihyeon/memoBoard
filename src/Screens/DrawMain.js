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
  font-size: 16px;
  font-weight: bold;
  font-family: 'Gaegu';
  margin-top: 0px;
  margin-left: 200px;
  border-radius: 25px;
  border: 1px solid #e67700;
  background: #fff4e6;
  color: #e67700;
`;

function DrawMain() {
  return (
    <>
      <ContentBox>
        <Header>
          <SearchBox placeholder="🔍 날짜를 검색하세요. ex) 6월 19일" />
        </Header>
        <BoxItemList />
        {/* <Footer>
          <Button Text="생성" Pathes="/write" />
        </Footer> */}
      </ContentBox>
    </>
  );
}

export default DrawMain;
