import React, { useCallback, useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
//import { saveComment, getComment, updateComment } from "./CommentManager"
import { CommentContext } from "./CommentManager"

export const CommentForm = ( { userBook, handleShowFormCreate }) => {
    //const [ comment, setComment ] = useState({})
    const history = useHistory()
   
    const { saveComment, comment, setComment, getComments } = useContext(CommentContext)

    const handleOnChange = (event) => {
        const copyComment = { ...comment }
        copyComment[event.target.name] = event.target.value
        setComment(copyComment)
    }

    // useEffect(() => {
    //     if (commentId) {
    //         getComment(commentId).then((data) => setComment({
    //         ...data,
    //         comment: data.comment,
    //         }))
    //     }
    // }, [commentId])



    const addComment = (event) => {
        event.preventDefault()

        saveComment(comment).then(() => {
            handleShowFormCreate()
        })
    }

    // const updateUserComment = (event) => {
    //     event.preventDefault()

    //     updateComment(comment.id, comment).then(() => {
    //     })
    // }
    // useEffect(() => {
    //     console.log('book', bookId)
    //     console.log('comment', comment)
        
    // }, [bookId, comment]);


    return (
        <form>
            <div>
                <label>Comment: </label>
                <input name='comment' type='textarea' value={comment.comment} onChange={(event) => handleOnChange(event)}></input>
            </div>
            <div>
                <button onClick={(event) => {
                        addComment(event)
                }}>Save Comment</button>
            </div>
        </form>
    )
}