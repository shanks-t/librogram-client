import React, { useEffect, useState, useContext } from "react"
import { useParams, useHistory, Link } from 'react-router-dom'
import { UserBookSearch } from "./UserBookSearch"
import { UserBookFilter } from "./UserBookFilter"
import { UserContext } from "./UserManager"
import { UserBook } from "./UserBook"

import './UserView.css'

export const UserLibrary = (props) => {
    const { classes } = props
    const [books, setBooks] = useState([])
    const [userId, setUserId] = useState()
    const [filters, toggleFilters] = useState(false)
    const { user, userBooks, getCurrentUser, getBooksByUser, deleteBook, searchBooksByUser } = useContext(UserContext)

    useEffect(() => {
        getBooks()
    }, []);

    useEffect(() => {
        getCurrentUser().then(
            setUserId(user.user?.id)
        )
    }, []);

    const showFilters = () => {
        if (filters === false) { toggleFilters(true) }
        else { toggleFilters(false) }
    }


    const getBooks = (userId, name, value) => {
        getBooksByUser(userId)
    }
    const handleSearch = (e) => {
        if (e.target.value == 0) {
            getBooks()
        } else {
            searchBooksByUser(userId, e.target.name, e.target.value).then(data => setBooks(data))
        }
    }

    useEffect(() => {
        if (userId) {
            getBooks()
        }
    }, [user])

    const handleDelete = (event, bookId) => {
        event.preventDefault()
        deleteBook(bookId).then(() => {
            getBooks()
        })
    }


useEffect(() => {
    console.log('books', userBooks)
}, [userBooks]);

    return (

        <><div className="user-search-header">
            <h2>Search Your Library</h2>
            <UserBookFilter showFilters={showFilters} handleSearch={handleSearch} filters={filters} />
            <UserBookSearch user={user} handleSearch={handleSearch} />
        </div><div className="search-results">
                {userBooks.map(book => <UserBook book={book} handleDelete={handleDelete}/>)}
            </div></>
    )
}