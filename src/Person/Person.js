import React from 'react'

const person=(props)=>{
return ( 
      <div>
          <p>I am a person who is Building this App and I am {props.name} and  {props.Age} year old
          </p>
        <p>{props.class}</p>
      </div>
    )
};

export default person;