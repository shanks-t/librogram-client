import React, { useContext, useEffect, useState } from 'react';
import { saveBook } from './BookManager';

import './Search.css'
import CheckoutModal from './CheckOutModal'
import useModal from './useModal'
import { UserContext } from '../user/UserManager';


export const Book = ({ book }) => {
    const { isShowing, toggle } = useModal();
    const [ newBook, setNewBook ] = useState({})
    const { user, getCurrentUser } = useContext(UserContext)
    


    const handleClick = () => {
        const copyBook = {
        title: book?.volumeInfo?.title,
        subtitle: book?.volumeInfo?.subtitle,
        authors: book?.volumeInfo?.authors,
        imagePath: book?.volumeInfo?.imageLinks?.thumbnail,
        description: book?.volumeInfo?.description,
        pageCount: book?.volumeInfo?.pageCount,
        publisher: book?.volumeInfo?.publisher,
        datePublished: book?.volumeInfo?.publishedDate,
        tags: book?.volumeInfo?.categories
        }
  
        setNewBook(copyBook)
        toggle(!isShowing)
    }

    const addBook = () => {
        saveBook(newBook).then(() => {
            toggle(!isShowing)
        })
    }
    useEffect(() => {
        console.log('newBook', newBook)

    }, [newBook, user]);


    return (
        <>
                {
                    book?.volumeInfo?.imageLinks?.thumbnail ?
                        <>
                            <div className='book'>
                                <a target='blank' href={book?.volumeInfo?.infoLink}>
                                    <img src={book?.volumeInfo?.imageLinks?.thumbnail} alt={book.title} />
                                </a>
                                <div className='button'><button className='button-default'  onClick={handleClick}>Add To Library</button></div>
                                
                            </div>
                            
                            <CheckoutModal
                            user={user}
                            isShowing={isShowing}
                            hide={toggle}
                            book={newBook}
                            title={book.volumeInfo.title}
                            authors={book.volumeInfo.authors}
                            addBook={addBook}

                            />
                        </>
                        : <> <div className='book'>
                        <a target='blank' href={book?.volumeInfo?.infoLink}>
                            <h3>{book.volumeInfo.title}</h3>
                        </a><div className='button'><button className='button-default' onClick={handleClick}>Add To Library</button></div>
                        </div>
                        </>

                }
        </>
    );
}
