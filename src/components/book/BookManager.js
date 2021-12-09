export const saveBook = (book) => {
    return fetch("http://localhost:8000/books", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    })

}