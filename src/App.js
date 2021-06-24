import React from 'react';
import { Route } from 'react-router';
import GlobalFonts from './font/font';
import './index.css';
import DrawMain from './Screens/DrawMain';
import WriteMemo from './Screens/WriteMemo';

function App() {
  return (
    <>
      <DrawMain />
      <GlobalFonts />
      <Route path="/write" component={WriteMemo} />
    </>
  );
}

export default App;
