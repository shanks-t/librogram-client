export const updateComment = (commentId, comment) => {
    return fetch(`http://localhost:8000/comments/${commentId}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    })
}

export const saveComment = (comment) => {
    return fetch("http://localhost:8000/comments", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    })

}

export const getComment = commentId => {
    return fetch(`http://localhost:8000/comments/${commentId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`
        }
    })
        .then(response => response.json())
}

export const getComments = () => {
    return fetch(`http://localhost:8000/comments`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`
        }
    })
        .then(response => response.json())
}