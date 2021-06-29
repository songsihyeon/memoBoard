import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import ContentBox from './ContentBox';
import Header from './Header';
import DiaryItemList from '../components/Diary/DiaryItemList';
import Footer from './Footer';
import ButtonWrite from '../components/Button/ButtonWrite';

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
  border: 1px solid #495057;
  background: #e9ecef;
  color: #495057;
`;

function DrawMain() {
  const [text, setText] = useState({
    day: '',
    content: '',
  });
  const { day, content } = text;
  const onChange = (e) => {
    const { name, value } = e.target;
    setText({
      ...text,
      [name]: value,
    });
  };

  const diary = [
    {
      id: 1,
      day: '3월 15일',
      content: 'exexexexex',
    },

    {
      id: 2,
      day: '6월 29일',
      content: 'exexexexex',
    },
    {
      id: 3,
      day: '7월 6일',
      content: 'exexexexex',
    },
  ];

  const nextId = useRef(4);
  const onCreate = () => {
    setText({
      day: '',
      content: '',
    });
    nextId.current += 1;
  };

  return (
    <>
      <ContentBox>
        <Header isMain>
          <SearchBox placeholder="🔍 날짜를 검색하세요. ex) 6월 19일" />
        </Header>
        <DiaryItemList diary={diary} />
        <Footer>
          <ButtonWrite Text="생성" Pathes="/write" />
        </Footer>
      </ContentBox>
    </>
  );
}

export default DrawMain;
