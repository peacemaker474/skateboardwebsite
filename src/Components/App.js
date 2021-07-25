import React from 'react';
import GlobalStyle from './GlobalStyles';
import Router from './Router';

const App = () => {
  return (
    <div style={{display:"flex"}}className="App">
      <GlobalStyle />
      <Router />
    </div>
  )
}

export default App;
