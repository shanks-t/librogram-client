import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { UserContext } from '../user/UserManager';
import './UserView.css'


export const UserBook = ({ book, handleDelete }) => {
    const { user, getCurrentUser } = useContext(UserContext)
    
    return (
        <>
                {
                    book?.book?.image_path ?
                        <>
                            <div className='book'>
                                    <img src={book?.book.image_path} alt={book.title} data-modal='modal-three'/>
                                <div className='button'><button className='button-default'  onClick={handleDelete}>Delete</button></div>
                                
                            </div>
                        </>
                        : <> <div className='book'>
                            <h3 data-modal='modal-three'>{book.book.title}</h3>
                        <div className='button'><button className='button-default' onClick={handleDelete}>Delete</button></div>
                        </div>
                        </>

                }
        </>
    );
}