export const saveUserBook = (book) => {
    return fetch("http://localhost:8000/userbooks", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    })

}
export const updateUserBook = (userBookId, userBook) => {
    return fetch(`http://localhost:8000/userbooks/${userBookId}/edit`, {
        method: "PATCH",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userBook)
    })
}

export const getUserBook = userBookId => {
    return fetch(`http://localhost:8000/userbooks/${userBookId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`
        }
    })
        .then(response => response.json())
}

export const getBook = (bookId) => {
    return fetch(`http://localhost:8000/books/${bookId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`
        }
    })
        .then(response => response.json())
}

export const getBooksByUser = (username) => {
    return fetch(`http://localhost:8000/books?username=${username}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`
        }
    })
        .then(response => response.json())
}
export const getCurrentUser = () => {
    return fetch(`http://localhost:8000/readers/currentuser`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`
        }
    })
        .then(response => response.json())
}