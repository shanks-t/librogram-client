import React, { useEffect, useState } from 'react';
import { Book } from "./Book"
import { SearchResults } from './SearchResults';
import { SearchForm } from './SearchForm';
//import './Search.css'
import { Container, getToggleButtonGroupUtilityClass } from '@mui/material'
import { getBook } from './BookManager';



export const Search = () => {

    const [ books, setBooks ] = useState({});
    const [ search, setSearch ] = useState('');
    const [ API_KEY, set_API_KEY ] = useState(`${process.env.REACT_APP_API}`)
    const [ localBooks, setLocalBooks ] = useState([])
    const [ storageItem, setStorageItem ] = useState([])

    // const setNavSearch = () => {
    //     let url = ''
    //     if (storageItem) {
    //         url = `https://www.googleapis.com/books/v1/volumes?q=${storageItem}&key=${API_KEY}&maxResults=30`

    //     } else {
    //         url = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}&maxResults=30`
    //     }
    //     return url
    // }

    
    
    const getStorageBooks = async () => {
        const storageUrl = `https://www.googleapis.com/books/v1/volumes?q=${storageItem}&key=${API_KEY}&maxResults=30`
        try {
            const response = await fetch(storageUrl);
            const data = await response.json()
            setBooks(data);
        } catch (error) {
            console.error(error);
        }
    }
    
    const getBooks = async () => {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}&maxResults=30`
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
        console.log(e.target.value)
    }

    useEffect(() => {
        console.log('search', search)
    }, [search]);

    useEffect(() => {
        console.log('books', books)
        console.log('localbooks', localBooks)

    }, [books, localBooks])

    useEffect(() => {
        getItems()
    }, []);

    const getItems = () => {
        setStorageItem(JSON.parse(localStorage.getItem('search') || '[]'))
        getStorageBooks()
    }
    // const handleUpdateBooks = () => {
    //     if(items) {
    //         setLocalBooks(items)
    //         console.log('books', books)
    //         console.log('items', items)
    //     }
    // }
    useEffect(() => {
        setSearch()
        getItems()
        console.log('storageItem', storageItem)    
    }, [storageItem]);



    return (
        <Container align='center' sx={{ mt: 2 }}>
        <div>
            <h2>Search for Books</h2>
        </div>
            <SearchForm
            handleSearchKeyUp={handleSearchKeyUp}
            onInputChange={onInputChange}
            getBooks={getBooks}
            />
            {/* <div className="search">
                <input type="text" value={search} onChange={onInputChange} onKeyUp={handleSearchKeyUp}/>
                <button type="submit"  onClick={getBooks}>Search</button>
                <br></br>

            </div> */}
            <div className='results'>
                <SearchResults books={books} />
        
            </div>
        </Container>
    );
}

