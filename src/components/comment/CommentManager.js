import React, { useState, createContext } from "react"
import { useHistory } from "react-router"

// The context is imported and used by individual components that need data
export const CommentContext = createContext()

// This component establishes what data can be used.
export const CommentProvider = (props) => {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState([])
    const history = useHistory()

    const getComments = (bookId) => {
        return fetch(`http://localhost:8000/comments?bookId=${bookId}`,{
            headers: {"Authorization": `Token ${localStorage.getItem("lg_user_token")}`}
        })
        .then(res => res.json())
        .then((data) => setComments(data))
    }

    const getComment = commentId => {
    return fetch(`http://localhost:8000/comments/${commentId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`
        }
    })
        .then(response => response.json())
        .then((data) => setComment(data))
}

    const deleteComment = (id) => {

        return fetch(`http://localhost:8000/comments/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("lg_user_token")}`
            }
        })
        .then(getComments)

    }

    const saveComment = (comment) => {
    return fetch("http://localhost:8000/comments", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    })
    .then(getComments)
}

const updateComment = (commentId, comment) => {
    return fetch(`http://localhost:8000/comments/${commentId}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    })
}

    return (
        <CommentContext.Provider value={{
            comments, comment, setComment, setComments, getComments, getComment, deleteComment, saveComment, updateComment
        }}>
            {props.children}
        </CommentContext.Provider>
    )
}



// export const updateComment = (commentId, comment) => {
//     return fetch(`http://localhost:8000/comments/${commentId}`, {
//         method: "PUT",
//         headers: {
//             "Authorization": `Token ${localStorage.getItem("lg_user_token")}`,
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(comment)
//     })
// }

// export const saveComment = (comment) => {
//     return fetch("http://localhost:8000/comments", {
//         method: "POST",
//         headers: {
//             "Authorization": `Token ${localStorage.getItem("lg_user_token")}`,
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(comment)
//     })

// }

// export const getComment = commentId => {
//     return fetch(`http://localhost:8000/comments/${commentId}`, {
//         headers: {
//             "Authorization": `Token ${localStorage.getItem("lg_user_token")}`
//         }
//     })
//         .then(response => response.json())
// }

// export const getComments = () => {
//     return fetch(`http://localhost:8000/comments`, {
//         headers: {
//             "Authorization": `Token ${localStorage.getItem("lg_user_token")}`
//         }
//     })
//         .then(response => response.json())
// }