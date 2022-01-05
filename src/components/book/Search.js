import React, { useEffect, useState } from 'react';
import { Book } from "./Book"
import { SearchResults } from './SearchResults';
//import './Search.css'
import { Container } from '@mui/material'


export const Search = () => {

    const [books, setBooks] = useState({});
    const [search, setSearch] = useState('');
    const [API_KEY, set_API_KEY] = useState(`${process.env.REACT_APP_API}`)


    
    const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}&maxResults=30`

    const getBooks = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json()
            setBooks(data);
        } catch (error) {
            console.error(error);
        }
    }

    const handleSearchKeyUp = (event) => {
        event.preventDefault();
        if (event.key === 'Enter' && event.keyCode === 13) {
            getBooks();
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
        <Container align='center' sx={{ mt: 2 }}>
        <div>
            <h2>Search for Books</h2>
        </div>
            <div className="search">
                <input type="text" value={search} onChange={onInputChange} onKeyUp={handleSearchKeyUp}/>
                <button type="submit"  onClick={getBooks}>Search</button>
                <br></br>

            </div>
            <div className='results'>
                <SearchResults books={books} />
            </div>
        </Container>
    );
}

