import React from 'react';
import HeaderContainer from './header-container';
import ButtonContainer from './button-container';

const App = () => {
  return (
    <div className="container">
      <HeaderContainer />
      <ButtonContainer />
      <div className="row">
        Hello World!
      </div>
    </div>
  )
};



export default App;