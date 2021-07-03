import styled from 'styled-components';

export const DeleteBtn = styled.div`
  position: absolute;
  right: 5%;
  top: 115px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ced4da;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

export const ItemBox = styled.div`
  width: 500px;
  height: 280px;
  background-color: #dee2e6;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  &:hover {
    ${DeleteBtn} {
      display: initial;
    }
  }
  position: relative;
`;

export const Title = styled.span`
  font-size: 28px;
  font-weight: bold;
  font-family: 'Gaegu';
  margin: 30px 30px 5px 30px;
`;

export const Content = styled.span`
  font-size: 20px;
  font-family: 'Gaegu';
  margin: 5px 30px 0 30px;
  word-break: keep-all;
`;
