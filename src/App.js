import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './components/layout/header'
import { BrowserRouter } from 'react-router-dom';



class App extends Component {

  render() {
  return (
    <BrowserRouter>
        <div className="App">          
        <Header />        
        </div>   
      <hr />      
    </BrowserRouter>    
    
      
  );
}
}

export default App;
