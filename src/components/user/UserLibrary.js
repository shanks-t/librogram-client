import React, { useEffect, useState } from "react"
import { useParams, useHistory, Link } from 'react-router-dom'
import { getBooksByUser, getCurrentUser, deleteBook } from "./UserManager"
import "./UserProfile.css"

export const UserLibrary = (props) => {
    const [books, setBooks] = useState([])
    const [userId, setUserId] = useState({})
    const history = useHistory()


    const getUser = () => {
        getCurrentUser().then(data => setUserId(data.user.id))
    }
    const getBooks = () => {
        getBooksByUser(userId).then(data => setBooks(data))
    }
    
    useEffect(() => {
        if(userId) {

            getBooks()
        }
    }, [userId])

    useEffect(() => {
        getUser()
    }, []);

    const handleDelete = (bookId) => {
        deleteBook(bookId).then(() => {
            getBooks()
        })
    }

    useEffect(() => {
        console.log('books', books)
        console.log('user', userId)
    }, [books, userId]);

    return (
        <>

            <article className="library">
                <div className="books">
                    {
                        books.map(book => {
                            return <><Link to={`profile/books/${book.book.id}/${book.id}`}>
                                <img src={book?.book.image_path} alt={book.book.title} />
                                </Link>
                            <button className='delete' onClick={(event) => {
                                event.preventDefault()
                                handleDelete(book.id)
                            }}>Remove from library</button>
                            </>
                        })
                    }
                </div>
            </article>
        </>
    )
}