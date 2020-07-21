import React, {Component} from 'react';
import Navbar from './components/Navbar';
//pages
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

import './App.css';



class App extends Component {
  render(){
    return (
      
      <div className="App">
        <Navbar/>
        <Home id="home" />
        <About id="about" />
        <Portfolio id="portfolio" />
        <Contact id="contact" />        
      </div>
    );
  }
 
}

export default App;
