import React, { useContext, useEffect, useState } from "react"
import { Link, useHistory } from 'react-router-dom'

import { CommentForm } from "./CommentForm"
import { UserContext } from "../user/UserManager"
import { CommentContext } from "./CommentManager"

import styled from 'styled-components'


const ScrollableContent = styled.div`
position: absolute;
width: 86%;
height: calc(100% - 140px);
overflow-y: auto;
margin: 10px 30px 30px 30px;
padding: 0px 25px 38px 0px;
/* scroll bar width */
&::-webkit-scrollbar {
width: 10px;
}`


export const CommentsList = (props) => {
    const [showForm, setShowForm] = useState(false)
    const [showFormCreate, setShowFormCreate] = useState(false)
    const { comment, deleteComment, getComments, comments, setComments } = useContext(CommentContext)
    const { user, getBooksByUser, userBook } = useContext(UserContext)

    useEffect(() => {
        getComments()
    }, [userBook]);

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
        <ScrollableContent>

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
        </ScrollableContent>
    )
}