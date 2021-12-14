import React, { useEffect, useState } from "react"
import { Link, useHistory } from 'react-router-dom'
import { getComments } from "./CommentManager"

export const CommentsList = (props) => {
    const [ comments, setComments ] = useState([])
    const history = useHistory()

    const commentsFetch = () => {
        getComments(). then(data => setComments(data))
    }
    
    useEffect(() => {
        commentsFetch()
    }, []);

    useEffect(() => {
        console.log('comments', comments)
    }, [comments]);
    return (
        <>
        
        <article className="comments">
        <button onClick={()=>history.push('comments/create')}>Create a New Reading comment</button>
        <ul>
        {
                comments.map(comment => {
                    return <>
                    <li key={`comment--${comment.id}`} className="comment">
                        <Link to={`comments/edit/${comment.id}`}>{comment.id}</Link>
                    </li>
                    <li>{comment.comment}</li>
                    <li>{comment.created_on}</li>
                    </>
            })
        }
        </ul>
    </article>

    </>
    )
    }