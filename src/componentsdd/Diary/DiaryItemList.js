import React from 'react';
import styled from 'styled-components';
import DiaryItem from './DiaryItem';

const ScrollSection = styled.div`
  overflow: scroll;
  background: #dee2e6;
  width: 1850px;
  height: 700px;
  margin-left: 100px;
  margin-top: 70px;
  border-radius: 10px;
  border: 1px solid #495057;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function DiaryItemList({ diary }) {
  return (
    <ScrollSection>
      {diary.map((diary) => (
        <DiaryItem diary={diary} key={diary.id} />
      ))}
    </ScrollSection>
  );
}

export default DiaryItemList;
