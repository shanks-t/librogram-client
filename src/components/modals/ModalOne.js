import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'

import { ReadingGoalForm } from '../readingGoal/ReadingGoalForm';
import { ReadingGoalsList } from '../readingGoal/ReadingGoalsList';
import Modal from './Modal';

import styled, {keyframes} from 'styled-components';
import { AiOutlineCloseCircle } from "react-icons/ai";

// animation for fade in
const fadeIn = keyframes`
    from {
        margin-right: -100%;
    }
    to {
        margin-right: 0%;
    }
`;

const ModalOverlay = styled.div`
    color: #4A82A6;
    position: fixed;
    top: 50;
    right: 0;
    z-index: 1100;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    animation: ${fadeIn} 0.5s;
`;

const ModalBoxContainer = styled.div`
    display: block;
    position: fixed;
    top: 50;
    right: 0;
    z-index: 1200;
    height: 550px;
    max-height: calc(100% - 6px);
    width: 50%;
    max-width: 650px;
    border: 2px solid black;
    border-radius: 25px 25px 25px 25px;
    background-color: #fff;
    box-shadow: 0 0 60px 10px rgba(0, 0, 0, 0.9);
    animation: ${fadeIn} 0.5s;
    // TBD: add responsiveness
`;

const ModalBoxControl = styled.div`
    position: absolute;
    top: 0px;
    right: 11px;
    z-index: 1200;
`;

const ModalBoxContent = styled.div`
    color: #333;
`;

const NonScrollableContent = styled.div`
    margin: auto;
    text-align: center;
`;

const ScrollableContent = styled.div`
    position: absolute;
    width: 86%;
    height: calc(100% - 140px);
    overflow-y: auto;
    margin: 10px 30px 30px 30px;
    padding: 0px 25px 38px 0px;
    /* scroll bar width */
    &::-webkit-scrollbar {
      width: 10px;
    }
    
    /* scroll bar track */
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 2px #333; 
      border-radius: 10px;
    }
     
    /* scroll bar handle */
    &::-webkit-scrollbar-thumb {
      background: rgba(51,51,51,0.8);
      opacity: 0.6;
      border-radius: 10px;
    }
    
    /* scroll bar handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: rgba(51,51,51,1);
    }
`;


const ModalOne = ({ closeFn = () => null, open = false }) => {
    const [ showForm, setShowForm ] = useState(false)

    const handleShowForm = () => {
        setShowForm(!showForm)
    }
    return (
        <Modal open={open}>
            <ModalBoxContainer>
                <ModalBoxControl>
                    <AiOutlineCloseCircle aria-label="close" onClick={closeFn}/>
                </ModalBoxControl>
                <ModalBoxContent>
                    <NonScrollableContent>
                        <p>Here are your current reading goals</p>
                        {showForm ? <button  onClick={() => {handleShowForm()}}> Cancel </button> : <button onClick={() => {handleShowForm()}}> Create New Reading Goal</button>}
                        </NonScrollableContent>
                    { showForm ?
                        <ReadingGoalForm toggle={handleShowForm} />
                        :
                    <ScrollableContent>
                        <ReadingGoalsList close={closeFn}/>
                    </ScrollableContent>
                    }
                </ModalBoxContent>
            </ModalBoxContainer>
        </Modal>
        
    );
};

export default ModalOne;