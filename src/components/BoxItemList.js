import React from 'react';
import styled from 'styled-components';
import BoxItem from './BoxItem';

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
      <BoxItem>9</BoxItem>
      <BoxItem>10</BoxItem>
      <BoxItem>11</BoxItem>
      <BoxItem>12</BoxItem>
      <BoxItem>13</BoxItem>
      <BoxItem>14</BoxItem>
    </ScrollSection>
  );
}

export default BoxItemList;
