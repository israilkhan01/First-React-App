import React from 'react'

const person=(props)=>{
return ( 
      <div>
          <p onClick={props.click}>I am a person who is Building this App and I am {props.name} and  {props.Age} year old
          </p>
        <p>{props.class}</p>
        <input type="text" onChange={props.change}/>
      </div>
    )
};

export default person;