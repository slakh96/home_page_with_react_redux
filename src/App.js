import React, { Component } from 'react';
import wheel from './car_wheel.png';
import './App.css';
import Time from './time_files/time_component.js';
import Todo from './todo_files/todo_component.js';
import Weather from './weather_files/weather_component.js';

class App extends Component {
  render() {
    return (
    
     <div className = "main">
        <img src = {wheel} className = "App-logo" alt = "spinning car wheel"/>
        <Time/>
        <Todo/>
        <Weather/>
     </div>
    );
  }
}

export default App;
 // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>