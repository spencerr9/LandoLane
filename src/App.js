import React from 'react';

import './reset.css';
import './App.css';

import NavBar from './Components/NavBar/NavBar';
import Landing from './Components/Landing/Landing';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="Landing">
        <NavBar />
        <Landing />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
