import React, { Component } from 'react';
import './assets/stylesheets/main.css';
import Header from './components/Header';
import MainSection from './components/Main_section';

class App extends Component {
  render() {
    return (
      <div>  
        <Header />
        <MainSection />
      </div>
    );
  }
}

export default App;
