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
                                <Link to={`profile/books/${book.book.id}/${book.id}`}>
                                    <img src={book?.book.image_path} alt={book.title} />
                                </Link>
                                <div className='button'><button className='button-default'  onClick={handleDelete}>Delete</button></div>
                                
                            </div>
                        </>
                        : <> <div className='book'>
                        <Link to={`profile/books/${book.book.id}/${book.id}`}>
                            <h3>{book.book.title}</h3>
                        </Link><div className='button'><button className='button-default' onClick={handleDelete}>Delete</button></div>
                        </div>
                        </>

                }
        </>
    );
}