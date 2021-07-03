import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { CreateMemo, Main } from './pages';
import GlobalFonts from './font/font';

function App() {
  return (
    <>
      <GlobalFonts />
      <BrowserRouter>
        <Route exact path="/" component={Main} />
        <Route path="/create" component={CreateMemo} />
      </BrowserRouter>
    </>
  );
}

export default App;
