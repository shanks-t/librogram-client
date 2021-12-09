import React, { useEffect, useState } from 'react';
import { saveBook } from './BookManager';
import './Search.css'
import Modal from './Modal'
import useModal from './useModal'


export const Book = ({ book }) => {
    const { isShowing, toggle } = useModal();
    const [ newBook, setNewBook ] = useState({})
    const [ title, setTitle ] = useState('')
    const [ author, setAuthor ] = useState('')


    const handleClick = () => {
        const copyBook = {
        title: book?.volumeInfo?.title,
        subtitle: book?.volumeInfo?.subtitle,
        author: book?.volumeInfo?.authors[0],
        imagePath: book?.volumeInfo?.imageLinks?.thumbnail,
        description: book?.volumeInfo?.description,
        pageCount: book?.volumeInfo?.pageCount,
        publisher: book?.volumeInfo?.publisher,
        datePublished: book?.volumeInfo?.publishedDate,
        }
        setNewBook(copyBook)
        setTitle(book?.volumeInfo.title)
        setAuthor(book?.volumeInfo.authors)
        toggle(!isShowing)
    }

    const addBook = () => {
        saveBook(newBook).then(() => {
            toggle(!isShowing)
        })
    }
    useEffect(() => {
        console.log('newBook', newBook)
        console.log('title', title)
    }, [newBook]);

    console.log('authors', book?.volumeInfo?.authors)
    return (
        <>
                {
                    book?.volumeInfo?.imageLinks?.thumbnail ?
                        <>
                            <a target='blank' href={book?.volumeInfo?.infoLink}>
                                <img src={book?.volumeInfo?.imageLinks?.thumbnail} alt={book.title} />
                            </a><button className='button-default' onClick={handleClick}>Add To Library</button>
                            <Modal
                            isShowing={isShowing}
                            hide={toggle}
                            book={newBook}
                            title={title}
                            author={author}
                            addBook={addBook}

                            />
                        </>
                        : <><a target='blank' href={book?.volumeInfo?.infoLink}>
                            <h3>{book.volumeInfo.title}</h3>
                        </a><button></button></>

                }
        </>
    );
}
