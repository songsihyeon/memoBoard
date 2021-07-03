import styled from 'styled-components';

export const Position = styled.div`
  bottom: 0;
  width: 100%;
  height: 150px;
  border-top: 1px solid #495057;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WriteBtn = styled.button`
  width: 250px;
  height: 70px;
  border-radius: 30px;
  color: white;
  font-size: 26px;
  font-weight: bold;
  font-family: 'Gaegu';
  background: #495057;
  cursor: pointer;
  &:hover {
    background: white;
    color: #495057;
    border: 3px solid #495057;
  }
`;
