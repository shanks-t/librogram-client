import React, { useEffect, useState } from "react"
import { useParams, useHistory, Link } from 'react-router-dom'
import { getBooksByUser, getCurrentUser, deleteBook, searchBooksByUser } from "./UserManager"
import { UserBookSearch } from "./UserBookSearch"
import { UserBookFilter } from "./UserBookFilter"
import "./UserProfile.css"

export const UserLibrary = ({ user }) => {
    const [books, setBooks] = useState([])
    const [userId, setUserId] = useState( user.id )
    const [filters, toggleFilters] = useState(false)
    const history = useHistory()

    const showFilters = () => {
        if (filters === false) { toggleFilters(true) }
        else { toggleFilters(false) }
    }

    const getUser = () => {
        getCurrentUser().then(data => setUserId(data.user.id))
    }
    const getBooks = (userId) => {
        getBooksByUser(userId).then(data => setBooks(data))
    }
    const handleSearch = (e) => {
        if (e.target.value == 0) {
            getBooks()
        }else{
            searchBooksByUser( userId, e.target.name, e.target.value).then(data => setBooks(data))
        }
    }

    useEffect(() => {
        if (userId) {

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
        <UserBookFilter showFilters={showFilters} handleSearch={handleSearch} filters={filters}/>
            <UserBookSearch user={user} handleSearch={handleSearch} />
                <article className="library">
                    <div className="books">
                        {
                            books.map(book => {
                                return <div><Link to={`profile/books/${book.book.id}/${book.id}`}>
                                    <img src={book?.book.image_path} alt={book.book.title} />
                                </Link>
                                    <button className='delete' onClick={(event) => {
                                        event.preventDefault()
                                        handleDelete(book.id)
                                    }}>Remove from library</button>
                                </div>
                            })
                        }
                    </div>
                </article>
        </>
    )
}