import React from 'react';
import styled from 'styled-components';

const BoxStyle = styled.div`
  position: absolute;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  width: 100%;
  height: 100%;
  background: #f8f9fa;
`;

function ContentBox({ children }) {
  return <BoxStyle>{children}</BoxStyle>;
}

export default ContentBox;
