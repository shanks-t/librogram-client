import React, { useEffect, useState, useContext } from "react"
import { useParams, useHistory, Link } from 'react-router-dom'
import { UserBookSearch } from "./UserBookSearch"
import { UserBookFilter } from "./UserBookFilter"
import { UserContext } from "./UserManager"

import { Carousel } from 'react-bootstrap'

export const Carousel = (props) => {
    //const [books, setBooks] = useState([])
    const [userId, setUserId] = useState(user.id)
    const [filters, toggleFilters] = useState(false)
    const { user, setBooks, getBooksByUser, deleteBook, searchBooksByUser } = useContext(UserContext)

    useEffect(() => {
        getBooks()
    }, []);

    // useEffect(() => {
    //     setUserId(user.id)
    // }, [user]);

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
        } else {
            searchBooksByUser(userId, e.target.name, e.target.value).then(data => setBooks(data))
        }
    }

    useEffect(() => {
        if (userId) {
            getBooks()
        }
    }, [user])

    const handleDelete = (bookId) => {
        deleteBook(bookId).then(() => {
            getBooks()
        })
    }


    return (
        <Carousel fade>
            {
                books.map(book => {
                    return <Carousel.Item>
                    <img
                      className="image"
                      src={book.book.image_path}
                    />
                  </Carousel.Item>
                })
            }
        </Carousel>