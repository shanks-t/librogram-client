import React, { useEffect, useState } from 'react';
import { Book } from "./Book"
import { SearchResults } from './SearchResults';
//import './Search.css'

import { Form, FormControl, Button } from 'react-bootstrap'

export const SearchForm = ({ handleFormSubmit, onInputChange, handleSearch, getBooks, search }) => {

    return (

        <div className="search">
            <Form className="d-flex" >
                <FormControl
                    placeholder='Search for Books'
                    defaultValue=""
                    onChange={onInputChange}
                    onKeyUp={handleSearch}
                    type="text"
                    className="mr-sm-2"
                />
                <Button onClick={getBooks} variant="outline-info">
                    Search
                </Button>
            </Form>
        </div>


    );
}

