import React from 'react';
import { Route } from 'react-router';
import DrawMain from './Screens/DrawMain';
import WriteMemo from './Screens/WriteMemo';

function App() {
  return (
    <>
      <DrawMain />
      <Route path="/write" component={WriteMemo} />
    </>
  );
}

export default App;
