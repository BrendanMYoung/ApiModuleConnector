import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormBuilder from './modules/FormBuilder';
import {  IShowFieldsStates, ShowFields } from './modules/IEntity';
import AutoStateBuilder from './modules/AutoStateBuilder';



function App() {
  //var show = AutoStateBuilder(new ShowFields()) as IShowFieldsStates
  //console.log(show.showNumber)
  //show.setShowNumber(2)
  //console.log(show)
  var {object, setObject, handleChange, getFields} = FormBuilder(new ShowFields())
  
  //states.setShowNumber(2)
  

  return (
    <div className="App">
      <header className="App-header">
        {getFields()}
      </header>
    </div>
  );
}

export default App;
