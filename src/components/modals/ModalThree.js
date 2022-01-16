import React, { useContext, useState } from 'react';

import Modal from './Modal';
import { UserContext } from '../user/UserManager';
import { UserBookForm } from '../user/UserBookForm';
import { UserBookDetails } from '../user/UserBookDetails';
import { CommentsList } from '../../components/comment/CommentList'
import { ReaderDetails } from '../user/ReaderDetails';

import styled, { keyframes } from 'styled-components';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// animation for fade in
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
//     background-color: rgb(198, 172, 142);
//     animation: ${fadeIn} 0.5s;
// `;

const ModalBoxContainer = styled.div`
    display: block;
    position: fixed;
    top: 50;
    right: 0;
    z-index: 1200;
    height: 750px;
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
box-shadow: 0 5px 8px 0 rgb(0 0 0 / 90%);
background-color: rgb(204 180 154 / .8);
    position: absolute;
    top: 0px;
    right: 11px;
    z-index: 1200;
`;

const ModalBoxContent = styled.div`
    color: #333;
`;

// const NonScrollableContent = styled.div`
//     margin: auto;
//     text-align: center;
// `;

// const ScrollableContent = styled.div`
//     position: absolute;
//     width: 86%;
//     height: calc(100% - 140px);
//     overflow-y: auto;
//     margin: 10px 30px 30px 30px;
//     padding: 0px 25px 38px 0px;
//     /* scroll bar width */
//     &::-webkit-scrollbar {
//       width: 10px;
//     }
    
//     /* scroll bar track */
//     &::-webkit-scrollbar-track {
//       box-shadow: inset 0 0 2px #333; 
//       border-radius: 10px;
//     }
     
//     /* scroll bar handle */
//     &::-webkit-scrollbar-thumb {
//       background: rgba(51,51,51,0.8);
//       opacity: 0.6;
//       border-radius: 10px;
//     }
    
//     /* scroll bar handle on hover */
//     &::-webkit-scrollbar-thumb:hover {
//       background: rgba(51,51,51,1);
//     }
// `;


const ModalThree = ({ closeFn = () => null, open = false }) => {
    const [showForm, setShowForm] = useState(false)
    const { userBook, getUserBook } = useContext(UserContext)
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    getUserBook(userBook.id)
  };

    const handleShowForm = () => {
        setShowForm(!showForm)
        getUserBook(userBook.id)
        console.log('form', showForm)
    }


    return (
        <Modal open={open}>
            <ModalBoxContainer>
                <ModalBoxControl>
                    <CancelPresentationIcon aria-label="close" onClick={() => { closeFn(); handleShowForm() }} />
                </ModalBoxControl>
                <ModalBoxContent>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="book details" {...a11yProps(0)} />
                            <Tab label="edit" {...a11yProps(1)} />
                            <Tab label="comments" {...a11yProps(2)} />
                            <Tab label="user details" {...a11yProps(3)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <UserBookDetails userBook={userBook} />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <UserBookForm userBook={userBook} toggle={handleShowForm}/>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <CommentsList />
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <ReaderDetails userBook={userBook}/>
                    </TabPanel>
                </ModalBoxContent>
            </ModalBoxContainer>
        </Modal>

        // <Modal open={open}>
        //     <ModalBoxContainer>
        //         <ModalBoxControl>
        //             <AiOutlineCloseCircle aria-label="close" onClick={()=> {closeFn(); handleShowForm()}}/>
        //         </ModalBoxControl>
        //         <ModalBoxContent>
        //             <NonScrollableContent>
        //                 <p>Details for {userBook.book?.title}</p>
        //                 {!showForm ? <button  onClick={() => {handleShowForm()}}> Cancel </button> : <button onClick={() => {handleShowForm()}}> Edit Details</button>}
        //                 </NonScrollableContent>
        //                 { !showForm ?
        //                     <UserBookForm userBook={userBook} toggle={handleShowForm}/>
        //                     :
        //                     <ScrollableContent>
        //                         { userBook ?
        //                             <UserBookDetails userBook={userBook} />
        //                             :
        //                             <h3>Loading . . .</h3>
        //                         }
        //             </ScrollableContent>
        //                 }
        //         </ModalBoxContent>
        //     </ModalBoxContainer>
        // </Modal>

    );
};

export default ModalThree