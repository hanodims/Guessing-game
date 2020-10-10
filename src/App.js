import React, {useState} from 'react';
import {Container,Button,Row} from 'react-bootstrap'
import logo from './thinking.svg';
import winner from './winner.svg';
import './App.css';

// Utils
import { shuffle } from "./utils";

//Components
import Won from './Components/Won'
import Help from './Components/Help'


function App() {
let guessedNumbers = [];
const [number, setNumber] = useState(Math.floor(Math.random() * 100));
//------------------------------------------------
const [end, setEnd] = useState(false);
//------------------------------------------------

const [attempts, setAttempts] = useState(5);
    
function allAttempts() {
   if (attempts == 1){
       endGame();} }
//------------------------------------------------

const endGame = () => {
  setEnd(false);
  setAttempts(5);
  let reset= document.getElementById("user_input");
   try {
   reset.value =  null;
  } catch (error) {
    console.error(error);
} 
   setNumber(Math.floor(Math.random() * 100));
   setResult('');
   try {
    let endHelp= document.getElementById("printHelp");
    endHelp.style.display = "none";
   } catch (error) {
     console.error(error);
 } 
   }

//------------------------------------------------
  const [help, setHelp] = useState([]);
  let helpList = setHelper()
  
  const helpGenerateHandler = () => {
  setHelp(helpList);
  show("printHelp");
  show("helpGenerateHandler");
  show("helpButton");
  };

  const helpHandler = () => {
    show("printHelp");
    };
  
  function setHelper() {
  let num = 0;
  let helpList = [];
  helpList.push(number);
      while(helpList.length<10){
          if (number >= 95 && number <= 100){
              num = Math.floor(Math.random() * ((100) - (90) + 1) ) + 90;  
          }
          else if (number > 0)
          { num = Math.floor(Math.random() * ((number+5) - (number-5) + 1) ) + number-5;}

          else if (number == 0)
          { num = Math.floor(Math.random() * (number+10))  + 0;}

          else {endGame();}
          
          if (!helpList.includes(num)){
            helpList.push(num);
          }  
      }
      helpList = shuffle(helpList) ;
      helpList = helpList.map(n => <Help key={n} n={n} update_user_input={updateUserInput} />);
      return(helpList)} ;

//------------------------------------------------
    function show(pid){
        var x = document.getElementById(pid);
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    }
//------------------------------------------------

  const [result, setResult] = useState('');
  const clickHandler = () => {
      if (number==guessedNumber){
        setEnd(true);
      } 
      else if (guessedNumber <= number+10 && guessedNumber > number){
          setResult("Your Number is alittel higher " +`${number}`);
          setAttempts(attempts-1);
          allAttempts();
      }
      else if (guessedNumber >= number-10 && guessedNumber < number){
          setResult("Your Number is alittel lower "+ `${number}`);
          setAttempts(attempts-1);
          allAttempts();
        } else {
          setResult("Not even close ,try again " +`${number}`);
          setAttempts(attempts-1);
          allAttempts();
        }
    };
//------------------------------------------------
const [guessedNumber, setGuessedNumber] = useState(null);

 const handelChange = event => {
  setGuessedNumber(event.target.value);
    guessedNumbers.push(guessedNumber);
};
function updateUserInput(option){
  let newRreset= document.getElementById("user_input");
  try {
    newRreset.value =  option;
    setGuessedNumber(newRreset.value );
    guessedNumbers.push(guessedNumber);
   } catch (error) {
     console.error(error);
 } 
}
//------------------------------------------------

  return ( 
    <header className="App-header">
      {end ? (<img src={winner} className="App-logo" alt="logo" />):
        (<img src={logo} className="App-logo" alt="logo" />)}
    {end ? 
   ( 
    
   <Won  endGame = {endGame} /> 
   )
    :
    (<Container className="justify-content-center mb-3">
      <div style={{border:"1px solid black"}}>
    <Row className="justify-content-center mt-3 mb-1 "> 
      <p className="h1 font-weight-normal">Guess the Number</p>
       </Row>

       <Row className="justify-content-center mt-1">
       <p>{result} </p>  
           </Row>

      <Row className="justify-content-center m-3">
        <input type="number" id = "user_input" placeholder="enter 1-100" onChange={handelChange}></input>
        </Row>

      <Row className="justify-content-center m-3">
      <Button size="lg" variant="outline-danger mr-2" onClick={() => clickHandler()} >Try</Button>
      <Button size="lg" variant="outline-info" id="helpGenerateHandler" style={{display : "block"}} onClick={() => helpGenerateHandler()} >Help</Button>
      <Button size="lg" variant="outline-info" id="helpButton" style={{display : "none"}} onClick={() => helpHandler()} >Help</Button>
      </Row>
      <Row className="justify-content-center m-3">
       Attemps left: {attempts}
           </Row>
    <Row  className="justify-content-center mt-3 mb-5">
      <p id="printHelp" style={{display : "none"}}>
        {help}
       </p></Row>
       </div> 
      </Container>) }  </header>
  );
}

export default App;

