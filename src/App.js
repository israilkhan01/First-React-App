import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'


class App extends React.Component{
  state={
    persons:[
            { name: 'Isrial khan' ,age:21},
            { name: 'Azhar' ,age:21},
            { name: 'kaif' ,age:22},
            { name: 'ariz' ,age:20}
        ],
    otherstate: 'some other value',
    showPersons:false,
  }
  switchNameHandler =()=>{
    console.log(this.persons[0].name);
    // DON'T Do THis   personsState.persons[0].name='Aliya';
    this.setState({
      persons:[
      { name: 'aliya khan' ,age:18},
      { name: 'asma' ,age:21},
      { name: 'kaif' ,age:22},
      { name: 'ariz' ,age:20}
    ]});
  }
  nameChangeHandler=(event)=>{
    this.setState({
    persons:[
    { name: event.target.value ,age:18},
    { name: 'Azhar' ,age:21},
    { name: 'kaif' ,age:22},
    { name: 'ariz' ,age:20}
  ]});
 }
  togglePersonsHandler=()=>{
           const doesshow = this.state.showPersons;
           this.setState({showPersons:!doesshow})
          //  setPersonsState({ showPersons : !doesshow});
 }
  render(){
    const style={
      backgroundColor:'cyan',
      font:'inherit',
      border:'1px solid blue',
      marginBottom:'20px',
      padding:'8px',
      cursor:'pointer',
    }
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
        <Person name="Israil" age="21" />
        <Person
         name={this.state.persons[0].name} 
         age={this.state.persons[0].age}
         click={this.switchNameHandler}
         changed={this.nameChangeHandler} >
           My Hobbies:racing
         </Person>
         <Person name={this.state.persons[1].name} 
                 age={this.state.persons[1].age} />
         <Person name={this.state.persons[2].name} 
             age={this.state.persons[2].age}/>
      </div> 
     
      )
    }
    return (
      <div className="App">

        <h1>Hey There</h1>
        <p>This is really working</p>

        <button
         style={style} onClick={this.togglePersonsHandler} 
         >Switch Name</button>
         {persons}
        </div>
    )
  }
}

// const App = props =>{
//   const [ personsState, setPersonsState ] = useState({
//     persons: [
//       { name: 'Isrial khan' ,age:21},
//       { name: 'Azhar' ,age:21},
//       { name: 'kaif' ,age:22},
//       { name: 'ariz' ,age:20}
//      ],
//      otherstate: 'some other value',
//      showPersons:false,
//    });
//    const  switchNameHandler =()=>{
//       console.log(personsState.persons[0].name);
//       // DON'T Do THis   personsState.persons[0].name='Aliya';
//       setPersonsState({
//         persons:[
//         { name: 'aliya khan' ,age:18},
//         { name: 'asma' ,age:21},
//         { name: 'kaif' ,age:22},
//         { name: 'ariz' ,age:20}
//       ]});
//     }
//     const nameChangeHandler=(event)=>{
//       setPersonsState({
//       persons:[
//       { name: event.target.value ,age:18},
//       { name: 'Azhar' ,age:21},
//       { name: 'kaif' ,age:22},
//       { name: 'ariz' ,age:20}
//     ]});
//    }
//    const togglePersonsHandler=(event)=>{
//              var doesshow = personsState.showPersons;
//              console.log(doesshow)
//              setPersonsState({
//               persons:[
//               { name: event.target.value ,age:18},
//               { name: 'Azhar' ,age:21},
//               { name: 'kaif' ,age:22},
//               { name: 'ariz' ,age:20}
//             ],
//             showPersons:!doesshow,
//             });
//              console.log(personsState.showPersons)
//             //  setPersonsState({ showPersons : !doesshow});
//    }
//   //  INLINE case of class style funxtion should be put in render fun
//   let style={
//     backgroundColor:'cyan',
//     font:'inherit',
//     border:'1px solid blue',
//     marginBottom:'20px',
//     padding:'8px',
//     cursor:'pointer',
//   }
//     return (
//       <div className="App">

//         <h1>Hey There</h1>
//         <p>This is really working</p>

//         <button
//          style={style} onClick={togglePersonsHandler} 
//          >Switch Name</button>
      
      
//        { personsState.showPersons === true ?
//          <div>
//            <Person name="Israil" age="21" />
//            <Person
//             name={personsState.persons[0].name} 
//             age={personsState.persons[0].age}
//             click={switchNameHandler}
//             changed={nameChangeHandler} >
//               My Hobbies:racing
//             </Person>
//             <Person name={personsState.persons[1].name} 
//                     age={personsState.persons[1].age} />
//             <Person name={personsState.persons[2].name} 
//                 age={personsState.persons[2].age}/>
//          </div> : null
//          }
        
//         </div>
//     )

//   // return React.createElement('div',{className:'App'},React.createElement('h1',null,'This is my first react app'))
// }
//   // return React.createElement('div',{className:'App'},React.createElement('h1',null,'This is my first react app'))
export default App;
