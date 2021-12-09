import React, { useEffect, useState } from "react"
import { useParams, useHistory } from 'react-router-dom'
import { getBooksByUser, getCurrentUser } from "./UserManager"

export const UserLibrary = (props) => {
    const [books, setBooks] = useState([])
    const [ username, setUsername ] = useState({})
    const history = useHistory()


    const fetchLibrary = () => {
        getCurrentUser().then(data => setUsername(data.user.username))
        getBooksByUser(username).then(data => setBooks(data))
      }


    // const bookFetcher = () => {
    // }

    useEffect(() => {
       // bookFetcher()
        fetchLibrary()
    }, []);

    useEffect(() => {
        console.log('books', books)
        console.log('user', username)
    }, [books, username]);

    return (
        <>

            <article className="library">
                <ul>
                    {
                        books.map(book => {
                            return <><a target='blank' href={book?.volumeInfo?.infoLink}>
                                <img src={book?.volumeInfo?.imageLinks?.thumbnail} alt={book.title} />
                            </a></>
                        })
                    }
                </ul>
            </article>
        </>
    )
}