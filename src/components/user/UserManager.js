import React, { useState } from "react"

export const UserContext = React.createContext()

export const CurrentUserProvider = (props) => {
    const [ user, setUser ] = useState({events:[]})
    const [ tags, setTags ] = useState([])
    const [ userBook, setUserBook ] = useState({})
    const [ book, setBook ] = useState({events:[]})
    const [ userBooks, setUserBooks ] = useState([])

    const getCurrentUser = () => {
        return fetch("http://localhost:8000/readers/currentuser", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("lg_user_token")}`
            }
        })
            .then(response => response.json())
            .then(setUser)
    }


 const saveUserBook = (book) => {
    return fetch("http://localhost:8000/userbooks", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    })

}
 const updateUserBook = (userBookId, userBook) => {
    return fetch(`http://localhost:8000/userbooks/${userBookId}/edit`, {
        method: "PATCH",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userBook)
    })
    .then(getUserBook(userBookId))
}

 const getUserBook = (userBookId) => {
    return fetch(`http://localhost:8000/userbooks/${userBookId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`
        }
    })
        .then(response => response.json())
        .then(setUserBook)
}

 const getBook = (bookId) => {
    return fetch(`http://localhost:8000/books/${bookId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`
        }
    })
        .then(response => response.json())
        .then(setBook)
}

 const getBooksByUser = (userId) => {
    return fetch(`http://localhost:8000/userbooks?user_id=${userId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`
        }
    })
        .then(response => response.json())
        .then(setUserBooks)
}

 const getStatuses = () => {
    return fetch(`http://localhost:8000/statuses`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`
        }
    })
        .then(response => response.json())
}


const getTags = () => {
    return fetch(`http://localhost:8000/tags`,{
        headers: {"Authorization": `Token ${localStorage.getItem("lg_user_token")}`}
    })
    .then(res => res.json())
    .then(setTags)
}

 const deleteBook = (bookId) => {
    return fetch(`http://localhost:8000/userbooks/${ bookId }`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`
        }
    })
}

 const searchBooksByUser = (userId, q, term) => {
    return fetch(`http://localhost:8000/userbooks?user_id=${userId}&${q}=${term}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`
        }
    })
        .then(res => res.json())
        .then(setUserBooks)
}

 const updateReaderBio = (userId, Bio) => {
    return fetch(`http://localhost:8000/readers/${userId}/edit`, {
        method: "PATCH",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Bio)
    })
    .then(getCurrentUser)
}



return (
    <UserContext.Provider value={{
        user, tags, userBooks, userBook, book, getCurrentUser, saveUserBook, updateUserBook, getUserBook, getStatuses, getBook, getBooksByUser, getTags, deleteBook, searchBooksByUser, updateReaderBio, setUserBook, setUserBooks
    }}>
        {props.children}
    </UserContext.Provider>
)
}
