import React from 'react';
import './Person.css';
import styled from 'styled-components';

const StyleDiv = styled.div`
            width: 50%;
            margin: auto;
            padding: 16px;
            margin-bottom: 20px;
            border-radius: 10px;
            background-color: whitesmoke;
            box-shadow: 0px 0px 2px 3px lightgrey;
            text-align: center;
            @media (min-width:1000px){
            width : 450px;
}`
const person = (props) => {

    return (
            <StyleDiv>
                  <p onClick={props.click} > I am a {props.name} and I am {props.age}</p>
                  <span>{props.children}</span>
                  <br/>
                  <input type="text" onChange={props.changed} value={props.name} />

            </StyleDiv>
      )
}

export default person;