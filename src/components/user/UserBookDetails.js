import React, { useEffect, useState } from "react"
import { useParams, useHistory } from 'react-router-dom'
import { getBook, getCurrentUser } from "./UserManager"
import { CommentForm } from "../comment/CommentForm"
import "./UserProfile.css"


export const UserBookDetails = (props) => {
    const [book, setBook] = useState({})
    const history = useHistory()
    const [ showCommentForm, setShowCommentForm ] = useState(false)
    const [ showEditCommentForm, setShowEditCommentForm ] = useState(false)
    const { bookId } = useParams()

    const fetchBookInfo = () => {
        getBook(bookId).then(data => setBook(data))
    }

    const handleCreateToggle = (id) => {
        if(showCommentForm) {
            setShowCommentForm(false)
        }else{ 
            setShowCommentForm(true)
        }
    }
    const handleEditToggle = (id) => {
        if(showEditCommentForm) {
            setShowEditCommentForm(false)
        }else{ 
            setShowEditCommentForm(true)
        }
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
                    <h3>Comments</h3>
                    {
                    book?.comments?.map(comment => {
                        return <> <p>{comment.comment}</p>
                        <p>{comment.user.username}</p>
                        <p>{comment.created_on}</p>
                        {comment.user.id === book.user.id ? 
                            <>
                            <button onClick={()=> handleEditToggle()
                            }>Edit your comment</button>
                            <button>Delete your comment</button>
                            {showEditCommentForm ?
                            <CommentForm
                            toggle={setShowCommentForm}
                            book={book}
                            id={comment.id}
                            />
                    :""
                }
                            </>
                        :""
                    }
                    </>
                    })
                    }
                <button onClick={() => handleCreateToggle()}>Add comment</button>
                {showCommentForm ?
                    <CommentForm
                    toggle={setShowCommentForm}
                    book={book}
                    />
                    :""
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