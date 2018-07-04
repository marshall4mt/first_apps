import React, { Component } from 'react';
import NavBar from './component/navbar';
import Maincontent from './component/maincontent';
import Blog from './component/blog';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <NavBar />
        <Maincontent />
        <Blog />

      {/* end app */}
      </div>
    );
  }
}

export default App;
