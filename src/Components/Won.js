import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Button } from 'react-bootstrap';



function Won(props) { 

    return (
        <Container>
     <Row className="justify-content-center mt-3 mb-1 ">
      <p style={{color:"#4B0082"}}className="h1 font-weight-normal">You are a Winner!</p>
       </Row>

        <Row className="justify-content-center m-5">
            <Button size="lg" variant="outline-dark" onClick={() => props.endGame()} >Play Again</Button>
         </Row>

          </Container>
    );
}

export default Won;