import React from 'react';
import styled from 'styled-components';

const BoxStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 37.5rem;
  height: 40rem;
  background: rgba(255, 250, 237, 1);
  border-radius: 15%;
  border: 2px solid #e67700;
`;

function ContentBox({ children }) {
  return <BoxStyle>{children}</BoxStyle>;
}

export default ContentBox;
