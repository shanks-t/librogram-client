import React, { useEffect, useState } from "react"
import { useParams, useHistory, Link } from 'react-router-dom'
import { getBooksByUser, getCurrentUser, deleteBook, searchBooksByUser } from "./UserManager"
import { UserBookSearch } from "./UserBookSearch"
import { UserBookFilter } from "./UserBookFilter"
import { useCurrentUser } from "./UserContext"
import "./UserProfile.css"

export const UserLibrary = () => {
    const [books, setBooks] = useState([])
    const [filters, toggleFilters] = useState(false)
    const user = useCurrentUser()
    const userId = user.id
    const showFilters = () => {
        if (filters === false) { toggleFilters(true) }
        else { toggleFilters(false) }
    }


    const getBooks = (userId, name, value) => {
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
        if (user) {

            getBooks()
        }
    }, [user])

    const handleDelete = (bookId) => {
        deleteBook(bookId).then(() => {
            getBooks()
        })
    }


    return (
        <div className="library">
        <UserBookFilter showFilters={showFilters} handleSearch={handleSearch} filters={filters}/>
            <UserBookSearch user={user} handleSearch={handleSearch} />
                <article className="library">
                    <div className="books">
                        {
                            books.map(book => {
                                return <div className="library-book"><Link to={`profile/books/${book.book.id}/${book.id}`}>
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
        </div>
    )
}