import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


// guessedNumbers={guessedNumbers} 
//help={help} setHelp={setHelp} 
//user_input ={document.getElementById("user_input")} 
//handelChange={handelChange}/>);
function Help(props) { 
    const clickHandler = () => {
 /*       try {
            props.user_input.value = props.n;
           } catch (error) {
             console.error(error);
         } 
        props.guessedNumbers.push(props.n);
        let new_help = props.help.filter(n => !props.guessedNumbers.includes(n));
        props.setHelp(new_help);*/

    }
    return (
    <Button variant="outline-dark m-1" onClick={() => clickHandler()} >{props.n}</Button>
    );
}

export default Help;