import React, { useEffect, useState } from 'react';
import { Book } from "./Book"
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import { Paper } from '@mui/material';
import { Stack } from '@mui/material';
import './Search.css'


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
            <div className="search">
            <h2>Search for Books</h2>
                <input type="text" value={search} onChange={onInputChange} />
                <button type="submit" onClick={getBooks}>Search</button>
                <br></br>
            </div >
            <Grid container>
                <Grid className='results'>
                    {books?.items?.map(item => <Book book={item} />)}
                </Grid>
 
            </Grid>
            </>
    );
}

