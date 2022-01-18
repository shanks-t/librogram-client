import React, { useState } from "react"

export const UserContext = React.createContext()

export const CurrentUserProvider = (props) => {
    const [ user, setUser ] = useState({events:[]})
    const [ tags, setTags ] = useState([])
    const [ userBook, setUserBook ] = useState({})
    const [ book, setBook ] = useState({events:[]})
    const [ googleBooks, setGoogleBooks ] = useState({events:[]})
    const [ userBooks, setUserBooks ] = useState([])

    const getCurrentUser = () => {
        return fetch("https://librogram.herokuapp.com/readers/currentuser", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("lg_user_token")}`
            }
        })
            .then(response => response.json())
            .then(setUser)
    }


 const saveUserBook = (book) => {
    return fetch("https://librogram.herokuapp.com/userbooks", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    })

}
 const updateUserBook = (userBookId, userBook) => {
    return fetch(`https://librogram.herokuapp.com/userbooks/${userBookId}/edit`, {
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
    return fetch(`https://librogram.herokuapp.com/userbooks/${userBookId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`
        }
    })
        .then(response => response.json())
        .then(setUserBook)
}

 const getBook = (bookId) => {
    return fetch(`https://librogram.herokuapp.com/books/${bookId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`
        }
    })
        .then(response => response.json())
        .then(setBook)
}

 const getBooksByUser = (userId) => {
    return fetch(`https://librogram.herokuapp.com/userbooks?user_id=${userId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`
        }
    })
        .then(response => response.json())
        .then(setUserBooks)
}

 const getStatuses = () => {
    return fetch(`https://librogram.herokuapp.com/statuses`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`
        }
    })
        .then(response => response.json())
}


const getTags = () => {
    return fetch(`https://librogram.herokuapp.com/tags`,{
        headers: {"Authorization": `Token ${localStorage.getItem("lg_user_token")}`}
    })
    .then(res => res.json())
    .then(setTags)
}

 const deleteBook = (bookId) => {
    return fetch(`https://librogram.herokuapp.com/userbooks/${ bookId }`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`
        }
    })
    .then(getCurrentUser)
}

 const searchBooksByUser = (userId, q, term) => {
    return fetch(`https://librogram.herokuapp.com/userbooks?user_id=${userId}&${q}=${term}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`
        }
    })
        .then(res => res.json())
        .then(setUserBooks)
}

 const updateReaderBio = (userId, Bio) => {
    return fetch(`https://librogram.herokuapp.com/readers/${userId}/edit`, {
        method: "PATCH",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Bio)
    })
    .then(getCurrentUser)
}

const getGoogleBooks = (search) => {
        
    return fetch(`https://librogram.herokuapp.com/search?q=${search}`,{
        headers: {"Authorization": `Token ${localStorage.getItem("lg_user_token")}`}
    })
    .then(res => res.json())
    .then(setGoogleBooks)
}


return (
    <UserContext.Provider value={{
        user, tags, userBooks, userBook, book, googleBooks, getCurrentUser, saveUserBook, updateUserBook, getUserBook, getStatuses, getBook, getBooksByUser, getTags, deleteBook, searchBooksByUser, updateReaderBio, setUserBook, setUserBooks, getGoogleBooks
    }}>
        {props.children}
    </UserContext.Provider>
)
}
