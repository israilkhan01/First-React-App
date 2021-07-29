import React from 'react';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person'


const StyledButton = styled.button`
  background-color: ${props=>props.alt ? 'yellow' : 'lightgreen'};
  font: inherit;
  border: 1px solid blue;
  margin-bottom: 20px;
  padding: 8px;
  cursor: pointer;

  &:hover{
    background-color: ${props=>props.alt ? 'lightgreen' : 'yellow'};
  }
  `;
class App extends React.Component{
  state={
    persons:[
            {id:'asdf1',  name: 'Isrial khan' ,age:21},
            { id:'asdf2',   name: 'Azhar' ,age:21},
            {id:'asdf3',    name: 'kaif' ,age:22},
            {  id:'asdf5',  name: 'ariz' ,age:20}
        ],
    otherstate: 'some other value',
    showPersons:false,
  }
 
  nameChangeHandler=(event,id)=>{
    const personIndex= this.state.persons.findIndex(p=>{
      return p.id === id
    });
    const person = {
      ...this.state.persons[personIndex]
    }
  //  const person = Object.assign({},this.state.persons[personIndex])
   person.name=event.target.value;
   const persons = [...this.state.persons];
   persons[personIndex]=person; 
  
  this.setState({
    persons:persons});
 }
  togglePersonsHandler=()=>{
           const doesshow = this.state.showPersons;
           this.setState({showPersons:!doesshow})
 }
 deletePersonHandler=(personIndex)=>{
    let personss = this.state.persons;
    personss.splice(personIndex,1)
    this.setState({persons:personss})
    console.log(personIndex)
 }
  render(){
   
    let persons = null;
    if(this.state.showPersons){ 
      persons = (
        <div>
           {this.state.persons.map((person,index)=>{
            return <Person
             click={()=>this.deletePersonHandler(index)}
             name={person.name}
             age={person.age}       
             key={person.id}     
             changed={(event)=>this.nameChangeHandler(event,person.id)}
            />
          })}
       
      </div> 
      );
    
    }
    // let classes=['red','bold'].join(' ');
    const classes=[];
    if(this.state.persons.length<=2){
        classes.push('red');
    }
    if(this.state.persons.length<=1){
      classes.push('bold');
    }
    return (
     <div className="App">

      <h1>Hey There</h1>
      <p className={classes.join(' ')}>This is really working</p>

      <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}> Switch Name </StyledButton>
        {persons}

     </div>
    )
  }
}

export default App;
