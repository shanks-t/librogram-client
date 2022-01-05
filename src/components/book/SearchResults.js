import React, { useEffect, useState } from 'react';
import { Book } from "./Book"

//import './Search.css'

export const SearchResults = ({ books }) => {
    const [ localBooks, setLocalBooks ] = useState([])
    const [ items, setItems ] = useState([])

    useEffect(() => {
        getItems()
    }, []);

    const getItems = () => {
        setItems(JSON.parse(localStorage.getItem('books') || '[]'))
    }
    const handleUpdateBooks = () => {
        if(items) {
            setLocalBooks(items)
            console.log('books', books)
            console.log('items', items)
        }
    }
    useEffect(() => {
        handleUpdateBooks()
    }, [items]);

    return (
            <>
            
            {books ?
                books?.items?.map(item => <Book book={item}/>)
                :
                localBooks?.items?.map(item => <Book book={item}/>)
            }
            </>
    )
}