import React, { useContext, useEffect, useState } from "react"
import { Link, useHistory } from 'react-router-dom'

import { CommentForm } from "./CommentForm"
import { UserContext } from "../user/UserManager"
import { CommentContext } from "./CommentManager"

export const CommentsList = (props) => {
    const { userBook } = useContext(UserContext)
    const [showForm, setShowForm] = useState(false)
    const [showFormCreate, setShowFormCreate] = useState(false)
    const { comment, deleteComment, getComments, comments, setComments } = useContext(CommentContext)
    const { user, getBooksByUser } = useContext(UserContext)

    useEffect(() => {
        getComments()
    }, []);

    const handleShowFormCreate = () => {
        
        setShowFormCreate(!showFormCreate)
        console.log('form', showForm)
    }
    const handleShowForm = () => {
        setShowForm(!showForm)
        console.log('form', showForm)
    }

    const handleDelete = (event, id) => {
        event.preventDefault()
        deleteComment(id).then(() => {
        })
    }

    return (
        <article className="comments">
            {showFormCreate ?
                <CommentForm userBook={userBook} handleShowFormCreate={handleShowFormCreate} />
                :
                <button onClick={() => handleShowFormCreate()}>Add Comment</button>
            }
            {
                showForm ?

                    <CommentForm id={comment.id} userBook={userBook} handleShowForm={handleShowForm} />
                    :
                    comments.map(comment => {
                        return <>
                            <ul>
                                <li key={`comment--${comment.id}`} className="comment">
                                    <Link onClick={() => handleShowForm()}>{comment.id}</Link>
                                </li>
                                <li>Comment: {comment.comment}</li>
                                <li>Created On: {comment.created_on}</li>
                                <li>From: {comment.user.username}</li>
                                {comment.user.id == user.user.id ?
                                    <Link style={{ color: 'red' }} onClick={(event) => handleDelete(event, comment.id)}>delete</Link>
                                    :
                                    ""
                                }
                            </ul>
                        </>
                    })
            }


        </article>
    )
}