import React, { useEffect, useState } from "react"
import { useParams, useHistory, Link } from 'react-router-dom'
import { getBooksByUser, getCurrentUser } from "./UserManager"
import "./UserProfile.css"

export const UserLibrary = (props) => {
    const [books, setBooks] = useState([])
    const [username, setUsername] = useState({})
    const history = useHistory()


    const fetchLibrary = () => {
        getCurrentUser().then(data => setUsername(data.user.username))
        getBooksByUser(username).then(data => setBooks(data))
    }

    useEffect(() => {
        fetchLibrary()
    }, []);

    useEffect(() => {
        console.log('books', books)
        console.log('user', username)
    }, [books, username]);

    return (
        <>

            <article className="library">
                <div className="books">
                    {
                        books.map(book => {
                            return <><Link to={`profile/books/${book.id}`}>
                                <img src={book?.image_path} alt={book.title} />
                            </Link></>
                        })
                    }
                </div>
            </article>
        </>
    )
}