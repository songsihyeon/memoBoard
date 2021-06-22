import React from 'react';
import styled from 'styled-components';
import { MdDelete } from 'react-icons/md';

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #bac8ff;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const Item = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
  background: #ffec99;
  width: 29.25rem;
  height: 4rem;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

function BoxItem() {
  return (
    <Item>
      <Remove>
        <MdDelete />
      </Remove>
    </Item>
  );
}

export default BoxItem;
