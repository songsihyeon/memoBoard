import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  margin-left: 80px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e9ecef;
  width: 800px;
  height: 100px;
  border: 1px solid #495057;
  border-radius: 10px;
  cursor: pointer;
  color: #495057;
  font-weight: bold;
  font-size: 24px;
  font-family: 'Gaegu';
  float: left;
  &:nth-child(1) {
    margin-top: 30px;
  }
  &:nth-child(2) {
    margin-top: 30px;
  }
`;

function DiaryItem({ diary }) {
  return <Item>{diary.day}</Item>;
}

export default DiaryItem;
