import React from 'react';

import './reset.css';
import './App.css';

import NavBar from './Components/NavBar/NavBar'
import Landing from './Components/Landing/Landing'

function App() {
  return (
    <div className="App">
      <div className="Landing">
        {/* <NavBar /> */}
        <Landing />
      </div>
    </div>
  );
}

export default App;
