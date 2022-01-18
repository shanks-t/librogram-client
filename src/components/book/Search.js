import React, { useContext, useEffect, useState } from 'react';
import { SearchResults } from './SearchResults';
import { SearchForm } from './SearchForm';
import { UserContext } from '../user/UserManager';
//import './Search.css'
import { Container } from '@mui/material'



export const Search = () => {

    const [ search, setSearch ] = useState('');
    const { getGoogleBooks, googleBooks } = useContext(UserContext)
  

    const handleSearchKeyUp = (event) => {
        event.preventDefault();
        if (event.key === 'Enter' && event.keyCode === 13) {
            getGoogleBooks(search);
        }
    }
    const onInputChange = e => {
        setSearch(e.target.value);
        console.log(e.target.value)
    }

    const handleClick = (event) => {
        event.preventDefault();
        getGoogleBooks(search)

    }

    return (
        <Container align='center' sx={{ mt: 2 }}>
        <div className='search-header'>
            <h2>Search for Books</h2>
        </div>
            <SearchForm
            handleSearchKeyUp={handleSearchKeyUp}
            onInputChange={onInputChange}
            handleClick={handleClick}
            />
            {/* <div className="search">
                <input type="text" value={search} onChange={onInputChange} onKeyUp={handleSearchKeyUp}/>
                <button type="submit"  onClick={getBooks}>Search</button>
                <br></br>

            </div> */}
            <div className='results'>
                <SearchResults books={googleBooks} />
        
            </div>
        </Container>
    );
}

