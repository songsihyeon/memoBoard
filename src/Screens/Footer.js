import React from 'react';
import styled from 'styled-components';

const BoxFooter = styled.div`
  width: 31rem;
  height: 5rem;
  margin-left: 50px;
  margin-top: 20px;
  background: none;
`;

function Footer({ children }) {
  return <BoxFooter>{children}</BoxFooter>;
}

export default Footer;
