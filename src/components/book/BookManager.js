export const saveBook = (book) => {
    return fetch("https://librogram.herokuapp.com/books", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    })

}
export const saveUserBook = (book) => {
    return fetch("https://librogram.herokuapp.com/userbooks", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    })

}

export const getBook = (bookId) => {
    return fetch(`https://librogram.herokuapp.com/books/${bookId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`
        }
    })
        .then(response => response.json())
}