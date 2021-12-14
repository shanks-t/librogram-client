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
                <div className='comments'>
                    <h3>Comments</h3>
                    {
                    book?.comments?.map(comment => {
                        return  <><p>{comment.comment}</p>
                        <p>{book.user.username}</p>
                        <p>{comment.created_on}</p>
                        {comment.user.id === book.user.id ? 
                        <>
                        <button>Edit your comment</button>
                        <button>Delete your comment</button>
                        </>
                    :""
                    }
                </>
                    })
                    }
                </div>
                <div className='tags'>
                    <h3>Tags</h3>
                    {
                        book?.tags?.map(tag => (
                            <p>{tag.label}</p>
                        ))
                    }
                </div>
            <div className='readers'>
                <h3>Who's checked out this book:</h3>
                {book?.readers_list?.map(reader => (
                    <p>{reader}</p>
                ))
                }
            </div>
        </article>
        </>
    )
}