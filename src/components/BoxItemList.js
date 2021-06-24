import React from 'react';
import styled from 'styled-components';
import BoxItem from './BoxItem';

const ScrollSection = styled.div`
  overflow: scroll;
  width: 1000px;
  height: 15rem;
  margin-left: 53px;
  margin-top: 20px;
  &::-webkit-scrollbar {
    /* 세로 스크롤 넓이 */
    // width: 8px;
    /* 가로 스크롤 높이 */
    /* height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4); */
    display: none;
  }
`;

function BoxItemList() {
  return (
    <ScrollSection>
      <BoxItem>1</BoxItem>
      <BoxItem>2</BoxItem>
      <BoxItem>3</BoxItem>
      <BoxItem>4</BoxItem>
      <BoxItem>5</BoxItem>
      <BoxItem>6</BoxItem>
      <BoxItem>7</BoxItem>
      <BoxItem>8</BoxItem>
    </ScrollSection>
  );
}

export default BoxItemList;
