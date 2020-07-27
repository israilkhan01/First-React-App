import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'


const App = props =>{
   const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Isrial khan' ,age:21},
      { name: 'Azhar' ,age:21},
      { name: 'kaif' ,age:22},
      { name: 'ariz' ,age:20}
     ],
     otherstate: 'some other value'
   });
    const   switchNameHandler =()=>{
      console.log(personsState.persons[0].name);
      // DON'T Do THis   personsState.persons[0].name='Aliya';
      setPersonsState({
        persons:[
        { name: 'aliya khan' ,age:18},
        { name: 'Azhar' ,age:21},
        { name: 'kaif' ,age:22},
        { name: 'ariz' ,age:20}
      ]});
    }
  
    return (
      <div className="App">
        <h1>Hey There</h1>
        <p>This is really working</p>
        <button onClick={switchNameHandler} >Switch Name</button>
        <Person  name="Israil" age="21" />
        <Person 
          name={personsState.persons[0].name} 
          age={personsState.persons[0].age}
          click={switchNameHandler} >
            My Hobbies:racing
          </Person>
        <Person/>
        <Person/>
      </div>
    )

  // return React.createElement('div',{className:'App'},React.createElement('h1',null,'This is my first react app'))
}
  // return React.createElement('div',{className:'App'},React.createElement('h1',null,'This is my first react app'))
export default App;
