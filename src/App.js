import React,{ Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
class App extends Component{
  state={
    persons:[
      { name:"Israil khan", dream:"Google"},
    ],
    otherStuff:"pubg lover"
  }
  switchNameHandler=()=>{
    // console.log("Was Clicked!!"); 
    // DON'T Do this this.state.persons[0].name="Fat Boy";
    this.setState({
      persons:[
        { name:"Aliza", dream:"Microsoft"},
      ]
    })
  }
  switchChangeHandler=(event)=>{
       this.setState({
      persons:[
        { name:event.target.value, dream:"Microsoft"},
      ]
    })
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h2>Hello World!!</h2>
          <button onClick={this.switchNameHandler}>Switch Name!</button>
          <h1 className="App-link"> This is the first react App</h1>
          <Person name={this.state.persons[0].dream} Age="21" change={this.switchChangeHandler}/>
          <Person name={this.state.persons[0].name} Age="21" click={this.switchNameHandler}>My hobbies is: Playing pubg</Person>
        </header>
      </div> 
    );
  }
}


export default App;
