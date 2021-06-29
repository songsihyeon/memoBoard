import React, { useState } from 'react';
import * as S from './TextareaStyle';

function TextSection({ isTitle }) {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };
  return (
    <S.TextBox
      placeholder="내용을 입력해주세요.."
      onChange={onChange}
      value={text}
    />
  );
}

export default TextSection;
