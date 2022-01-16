import React from 'react';
import Modal from './Modal';
import { UserBioForm } from '../user/UserBioForm';

import styled, {keyframes} from 'styled-components';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

const fadeIn = keyframes`
    from {
        margin-right: -100%;
    }
    to {
        margin-right: 0%;
    }
`;

// const ModalOverlay = styled.div`
//     color: #4A82A6;
//     position: fixed;
//     top: 50;
//     right: 0;
//     z-index: 1100;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.25);
//     animation: ${fadeIn} 0.5s;
// `;

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
    background-color: #c6ac8e;
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


const ModalTwo = ({ closeFn = () => null, open = false }) => {

    return (
        <Modal open={open}>
            <ModalBoxContainer>
                <ModalBoxControl>
                    <CancelPresentationIcon aria-label="close" onClick={closeFn}/>
                </ModalBoxControl>
                <ModalBoxContent>
                    <UserBioForm close={closeFn}/>
                </ModalBoxContent>
            </ModalBoxContainer>
        </Modal>
        
    );
};

export default ModalTwo;

