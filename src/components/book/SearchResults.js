import React, { useEffect, useState } from 'react';
import { Book } from "./Book"

import './Search.css'

export const SearchResults = ({  }) => {
    const [ books, setBooks ] = useState([])
    const [ items, setItems ] = useState([])

    useEffect(() => {
        getItems()
    }, []);

    const getItems = () => {
        setItems(JSON.parse(localStorage.getItem('books') || '[]'))
    }
    const handleUpdateBooks = () => {
        if(items) {
            setBooks(items)
            console.log('books', books)
            console.log('items', items)
        }
    }
    useEffect(() => {
        handleUpdateBooks()
    }, [items]);

    return (
        <div className='results'>
                {
                    books?.items?.map(item => <Book book={item}/>)
                }
            </div>
    )
}