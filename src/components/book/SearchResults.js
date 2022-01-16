import React from 'react';
import { Book } from "./Book"

import './Search.css'

export const SearchResults = ({ books, localBooks }) => {

    return (
            <>
            <div className='search-results'>
            {books ?
                books?.items?.map(item => <Book book={item}/>)
                :
                localBooks?.items?.map(item => <Book book={item}/>)
            }

            </div>
            </>
    )
}