import React, { useContext } from 'react';
import { UserContext } from '../user/UserManager';
import './UserView.css'


export const UserBook = ({ book, handleDelete }) => {
    const { getUserBook, user } = useContext(UserContext)
    
    const handleClick = (event, id) => {
        event.preventDefault()
        getUserBook(id)
    }

    return (
        <>
                {
                    book?.book?.image_path ?
                        <>
                            <div className='book'>
                                    <img src={book?.book.image_path} alt={''} onClick={event => handleClick(event, book.id)} data-modal='modal-three'/>
                                <div className='button'><button className='button-default'  onClick={event => handleDelete(event, book.id)}>Delete</button></div>
                                
                            </div>
                        </>
                        : <> <div className='book'>
                            <h3 data-modal='modal-three'>{book.book.title}</h3>
                        <div className='button'><button className='button-default' onClick={handleDelete(book.id)}>Delete</button></div>
                        </div>
                        </>

                }
        </>
    );
}