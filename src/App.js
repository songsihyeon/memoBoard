import React from 'react';
import { Route } from 'react-router';
import GlobalFonts from './font/font';
import './index.css';
import DrawMain from './Screens/DrawMain';
import WriteDiary from './Screens/WriteDiary';

function App() {
  return (
    <>
      <DrawMain />
      <GlobalFonts />
      <Route path="/write" component={WriteDiary} />
    </>
  );
}

export default App;
