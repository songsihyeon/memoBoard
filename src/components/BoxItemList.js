import React from 'react';
import styled from 'styled-components';
import BoxItem from './BoxItem';

const ScrollSection = styled.div`
  overflow: scroll;
  width: 31rem;
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
      <BoxItem />
      <BoxItem />
      <BoxItem />
      <BoxItem />
      <BoxItem />
      <BoxItem />
    </ScrollSection>
  );
}

export default BoxItemList;
