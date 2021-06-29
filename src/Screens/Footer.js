import React from 'react';
import styled from 'styled-components';

const BoxFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 40px 0;
  width: 100%;
  background: none;
  border-top: 1px solid #495057;
`;

function Footer({ children }) {
  return <BoxFooter>{children}</BoxFooter>;
}

export default Footer;
