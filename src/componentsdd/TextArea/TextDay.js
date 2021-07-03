import React, { useState } from 'react';
import * as S from './TextareaStyle';

function TextDay({ isTitle }) {
  const [text, setText] = useState({
    day: '',
    content: '',
  });

  const { day, content } = text;
  const onChange = (e) => {
    const { value, day } = e.target;
    setText({
      ...Text,
      [day]: value,
    });
  };

  return (
    <S.TextBox
      isTitle={isTitle}
      placeholder="날짜를 입력해주세요.."
      onChange={onChange}
      value={day}
      autoFocus
    />
  );
}

export default TextDay;
