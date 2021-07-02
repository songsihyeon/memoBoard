import React from 'react';
// import { Route } from 'react-router';
import GlobalFonts from './font/font';
import './index.css';
import DrawMain from './Screens/DrawMain';

function App() {
  return (
    <>
      <GlobalFonts />
      <DrawMain />
    </>
  );
}

export default App;
