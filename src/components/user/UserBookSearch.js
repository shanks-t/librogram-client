import React, { useEffect, useState } from "react";

import { Form, FormControl, Button } from 'react-bootstrap'

export const UserBookSearch = ({ handleSearch }) => {

    return (
    
<div className="search">
            <div className='search-form'>
            <Form className="d-flex" >
                <FormControl
                    placeholder='Search for Books'
                    defaultValue=""
                    // onChange={onInputChange}
                    // onKeyUp={handleSearchKeyUp}
                    type="text"
                    className="mr-sm-2"
                />
                <Button onClick={handleSearch} variant="outline-success">
                    Search
                </Button>
            </Form>

            </div>
        </div>

    )
}