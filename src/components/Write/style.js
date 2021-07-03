import styled from 'styled-components';

export const TitleBox = styled.input`
  width: 800px;
  height: 70px;
  background-color: #dee2e6;
  margin-top: 10vh;
  border-radius: 50px;
  border: 2px solid #343a40;
  outline: none;
  color: #343a40;
  font-size: 28px;
  font-weight: bold;
  font-family: 'Gaegu';
  text-align: center;
  resize: none;
`;

export const MemoBox = styled.textarea`
  width: 1000px;
  height: 560px;
  background-color: #dee2e6;
  margin-top: 50px;
  border-radius: 35px;
  outline: none;
  border: 2px solid #343a40;
  padding: 20px 30px 20px 30px;
  font-size: 20px;
  font-family: 'Gaegu';
  resize: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BtnPosition = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DefaultBtn = styled.div`
  cursor: pointer;
  width: 160px;
  height: 50px;
  background-color: #868e96;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Gaegu';
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid #343a40;
  border-radius: 25px;
  margin: 30px 10px 0 10px;
`;

export const RedBtn = styled.div`
  cursor: pointer;
  width: 160px;
  height: 50px;
  background-color: #adb5bd;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Gaegu';
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid #343a40;
  border-radius: 25px;
  margin: 30px 10px 0 10px;
`;
