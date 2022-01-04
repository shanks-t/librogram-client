import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'

import Modal from './Modal';

import { Button } from 'react-bootstrap'

const ModalTwo = ({ closeFn = () => null, open = false }) => {
    const [ showForm, setShowForm ] = useState(false)

    const handleShowForm = () => {
        setShowForm(!showForm)
    }

    return (
        <>
        <Modal open={open} onHide={closeFn}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeFn}>
            Close
          </Button>
          <Button variant="primary" >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
        // <Modal open={open}>
        //     <ModalBoxContainer>
        //         <ModalBoxControl>
        //             <CloseIcon aria-label="close" onClick={closeFn}/>
        //         </ModalBoxControl>
        //         <ModalBoxContent>
        //             <NonScrollableContent>
        //                 <p>Here are your current reading goals</p>
        //                 {showForm ? <button  onClick={() => {handleShowForm()}}> Cancel </button> : <button onClick={() => {handleShowForm()}}> Create New Reading Goal</button>}
        //                 </NonScrollableContent>
        //             { showForm ?
        //                 <ReadingGoalForm toggle={handleShowForm} />
        //                 :
        //             <ScrollableContent>
        //                 <ReadingGoalsList close={closeFn}/>
        //             </ScrollableContent>
        //             }
        //         </ModalBoxContent>
        //     </ModalBoxContainer>
        // </Modal>
        
    );
};

export default ModalTwo;