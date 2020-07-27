import React from 'react';

const person = (props) => {
return <div>
    <p onClick={props.click} > I am a {props.name} and I am {props.age}</p>
        <span>{props.children}</span>
</div>
}

export default person;