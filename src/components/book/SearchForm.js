import React from 'react';
import './Search.css'

import { Form, FormControl, Button } from 'react-bootstrap'

export const SearchForm = ({ onInputChange, handleSearchKeyUp, handleClick, search }) => {

    return (

        <div className="search">
            <div className='search-form'>
            <Form className="d-flex" >
                <FormControl
                    placeholder='Search for Books'
                    defaultValue=""
                    onChange={onInputChange}
                    onKeyUp={handleSearchKeyUp}
                    type="text"
                    className="mr-sm-2"
                />
                <Button onClick={(event) => handleClick(event)} variant="outline-success">
                    Search
                </Button>
            </Form>

            </div>
        </div>


    );
}

