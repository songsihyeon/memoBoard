import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  margin-bottom: 10px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff4e6;
  width: 29.25rem;
  height: 4rem;
  border: 1px solid #e67700;
  border-radius: 10px;
  cursor: pointer;
  color: #e67700;
  font-weight: bold;
  font-size: 18px;
  font-family: 'Gaegu';
`;

function BoxItem({ children }) {
  return <Item>{children}</Item>;
}

export default BoxItem;
