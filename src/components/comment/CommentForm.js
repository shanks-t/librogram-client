import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { saveComment, getComment, updateComment } from "./CommentManager"


export const CommentForm = ( { id }) => {
    const [ comment, setComment ] = useState({})
    const history = useHistory()
    const { bookId } = useParams()
    const commentId = id

    const handleOnChange = (event) => {
        const copyComment = { ...comment }
        copyComment[event.target.name] = event.target.value
        copyComment['bookId'] = bookId
        setComment(copyComment)
    }

    useEffect(() => {
        if (commentId) {
            getComment(commentId).then((data) => setComment({
            ...data,
            comment: data.comment,
            }))
        }
    }, [commentId])



    const addComment = (event) => {
        event.preventDefault()

        saveComment(comment).then(() => {
            history.push('/profile')
        })
    }

    const updateUserComment = (event) => {
        event.preventDefault()

        updateComment(commentId, comment).then(() => {
            history.push('/profile')
        })
    }
    useEffect(() => {
        console.log('book', bookId)
        console.log('commentId', commentId)
        
    }, [bookId. commentId]);


    return (
        <form>
            <div>
                <label>Comment: </label>
                <input name='comment' type='textarea' value={comment.comment} onChange={(event) => handleOnChange(event)}></input>
            </div>
            <div>
                <button onClick={(event) => {
                    if (commentId) {
                        updateUserComment(event)
                    } else {
                        addComment(event)
                    }}
                    }>Save Comment</button>
            </div>
        </form>
    )
}