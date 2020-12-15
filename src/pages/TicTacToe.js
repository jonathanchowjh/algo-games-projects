import React, { useState } from 'react'
import TTTGame from '../tic_tac_toe/TTTGame'
import { Button, Modal } from 'react-bootstrap'

const TicTacToe = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (winner=true) => {
    console.log(winner)
    setShow(winner)
  };
  return (
    <div className="container">
      <div className="row p-3">
        <TTTGame handleShow={handleShow} />
        
        
        
        

        
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Game Ended</Modal.Title>
          </Modal.Header>
            <Modal.Body>{show == 'DRAW' ? 'GAME DRAWED' : `${show === 'X'? 'YOU' : 'AI'} WON! '${show}' WON! `}</Modal.Body>
            <Modal.Body>Continue from your LAST MOVE</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Play Again
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
    </div>
  )
}

function Example() {
  

  return (
    <>
    
    </>
  );
}

export default TicTacToe