import React, { useEffect, useState } from 'react';


export const Search = () => {
    
    const [books, setBooks] = useState({});
    const [search, setSearch] = useState('');
    const [api_key, set_api_key] = useState('AIzaSyAsXW_Px7aF_lPGe1qNwR0_PjWWB7uz5k8')

    //const API_KEY = AIzaSyAsXW_Px7aF_lPGe1qNwR0_PjWWB7uz5k8
    const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${api_key}&maxResults=30`

    const getBooks = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json()
            setBooks(data);
        } catch (error) {
            console.error(error);
        }
    }

    const onInputChange = e => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        getBooks();
    }, []);

    useEffect(() => {

        console.log('books', books)
    }, [books]);



    return (
        <>
            <h2>Search for Books</h2>
            <div className="search">
                <input type="text" value={search} onChange={onInputChange} />
                <button type="submit" onClick={getBooks}>Search</button>
                <br></br>

            </div>
            <div className='results'>
                {
                    books?.items?.map(book => (
                        book?.volumeInfo?.imageLinks?.thumbnail ?
                            <a target='blank' href={book?.volumeInfo?.infoLink}>
                                <img src={book?.volumeInfo?.imageLinks?.thumbnail} alt={book.title} />
                            </a>
                            : <a target='blank' href={book?.volumeInfo?.infoLink}>
                                <h3>{book.volumeInfo.title}</h3>
                            </a>
                    ))
                }
            </div>
        </>
    );
}
