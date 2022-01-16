import React from "react";

import { Form, FormControl, Button } from 'react-bootstrap'

export const UserBookSearch = ({ handleSearch }) => {
    return (
    
<div className="search">
            <div className='search-form'>
            <Form className="d-flex">
                <FormControl
                    name='q'
                    placeholder='Search Titles'
                    defaultValue=""
                    onChange={e => handleSearch(e)}
                    // onKeyUp={handleSearchKeyUp}
                    type="text"
                    className="mr-sm-2"
                />
                <Button  variant="outline-success">
                    Search
                </Button>
            </Form>

            </div>
        </div>

    )
}