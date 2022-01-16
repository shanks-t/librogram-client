import React, { useEffect, useState, useContext } from "react"
import { UserBookSearch } from "./UserBookSearch"
import { UserBookFilter } from "./UserBookFilter"
import { UserContext } from "./UserManager"
import { UserBook } from "./UserBook"

import './UserView.css'

export const UserLibrary = (props) => {
    const [books, setBooks] = useState([])
    const [filters, toggleFilters] = useState(false)
    const { user, userBooks, getBooksByUser, deleteBook, searchBooksByUser } = useContext(UserContext)

    useEffect(() => {
        getBooks()
    }, []);



    const showFilters = () => {
        if (filters === false) { toggleFilters(true) }
        else { toggleFilters(false) }
    }


    const getBooks = (userId) => {
        getBooksByUser(userId).then(data => setBooks(data))
    }
    const handleSearch = (e) => {
        e.preventDefault()
        if (e.target.value == 0) {
            getBooks()
        } else {
            searchBooksByUser(user.user.id, e.target.name, e.target.value).then(data => setBooks(data))
        }
    }


    // useEffect(() => {
    //     if (userId) {
    //         getBooks()
    //     }
    // }, [user])

    const handleDelete = (event, bookId) => {
        event.preventDefault()
        deleteBook(bookId).then(() => {
            getBooks(user.id)
        })
    }


    useEffect(() => {
        console.log('userbooks', userBooks)
    }, [userBooks]);

    return (

        <><div className="user-search-header">
            <h2>Search Your Library</h2>
            <UserBookFilter showFilters={showFilters} handleSearch={handleSearch} books={books} filters={filters} />
            <UserBookSearch user={user} handleSearch={handleSearch} />
        </div><div className="search-results">
                {userBooks ?

                    userBooks.map(book => <UserBook book={book} handleDelete={handleDelete} />) 
                    :
                    <h3>Loading . . .</h3>
                }
            </div></>
    )
}