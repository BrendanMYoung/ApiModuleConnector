import React from 'react';
import logo from './logo.svg';
import './App.css';
import StateBuilder from './modules/StateBuilder';
import {  ShowFields } from './modules/IEntity';

function App() {

  var {object, setObject, handleChange, getFields} = StateBuilder(new ShowFields())

  console.log(object)

  //states.setShowNumber(2)
  

  return (
    <div className="App">
      <header className="App-header">
        {    getFields()}
      </header>
    </div>
  );
}

export default App;
