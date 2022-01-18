import React, { useState, createContext, useContext } from "react"
import { UserContext } from "../user/UserManager"

// The context is imported and used by individual components that need data
export const CommentContext = createContext()

// This component establishes what data can be used.
export const CommentProvider = (props) => {
    const { userBook } = useContext(UserContext)
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState([])

    const getComments = () => {
        
        return fetch(`https://librogram.herokuapp.com/comments?bookId=${userBook.book.id}`,{
            headers: {"Authorization": `Token ${localStorage.getItem("lg_user_token")}`}
        })
        .then(res => res.json())
        .then(setComments)
    }

    const getComment = commentId => {
    return fetch(`https://librogram.herokuapp.com/comments/${commentId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`
        }
    })
        .then(response => response.json())
        .then((data) => setComment(data))
}

    const deleteComment = (id) => {
        return fetch(`https://librogram.herokuapp.com/comments/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("lg_user_token")}`
            }
        })
        .then(getComments)

    }

    const saveComment = (comment) => {
    return fetch(`https://librogram.herokuapp.com/comments?bookId=${userBook.book.id}`, {
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
    return fetch(`https://librogram.herokuapp.com/comments/${commentId}`, {
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
//     return fetch(`https://librogram.herokuapp.com/comments/${commentId}`, {
//         method: "PUT",
//         headers: {
//             "Authorization": `Token ${localStorage.getItem("lg_user_token")}`,
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(comment)
//     })
// }

// export const saveComment = (comment) => {
//     return fetch("https://librogram.herokuapp.com/comments", {
//         method: "POST",
//         headers: {
//             "Authorization": `Token ${localStorage.getItem("lg_user_token")}`,
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(comment)
//     })

// }

// export const getComment = commentId => {
//     return fetch(`https://librogram.herokuapp.com/comments/${commentId}`, {
//         headers: {
//             "Authorization": `Token ${localStorage.getItem("lg_user_token")}`
//         }
//     })
//         .then(response => response.json())
// }

// export const getComments = () => {
//     return fetch(`https://librogram.herokuapp.com/comments`, {
//         headers: {
//             "Authorization": `Token ${localStorage.getItem("lg_user_token")}`
//         }
//     })
//         .then(response => response.json())
// }