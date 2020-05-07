import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Hello World!!</h2>
        
        <h1 className="App-link"> This is the first react App</h1>
        <Person name="Israil" Age="21"/>
        <Person name="Aman" Age="21">My hobbies is: Playing pubg</Person>
      </header>
    </div> 
  );
}

export default App;
