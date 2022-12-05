import React from 'react';
import './App.css';
import Landingpage from './components/landingpage';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <Landingpage />



    </div>
  );
}

export default App;
