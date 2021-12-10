import React, { useEffect, useState } from "react"
import { useParams, useHistory } from 'react-router-dom'
import { getBook, getCurrentUser } from "./UserManager"
import "./UserProfile.css"

export const UserBookDetails = (props) => {
    const [book, setBook] = useState({})
    const history = useHistory()
    const { bookId } = useParams()

    const fetchBookInfo = () => {
        getBook(bookId).then(data => setBook(data))
    }

    useEffect(() => {
        fetchBookInfo()
    }, []);

    useEffect(() => {
        console.log('book', book)
    }, [book]);

    return (
        <>

            <article className="book-details">
                <img src={book?.image_path}/> <br></br>
                {book?.title} <br></br>
                {book?.subtitle}<br></br>
                {book?.author}<br></br>
                {book?.publisher}<br></br>
                {book?.date_published}<br></br>
                {book?.page_count}<br></br>
                {book?.description}<br></br>
                <div>
                    {
                    book?.comments?.map(comment => 
                        <><p>{comment.comment}</p>
                        <p>{comment.user.username}</p>
                        <p>{comment.created_on}</p></>)
                    }
                </div>
            </article>
        </>
    )
}