import React from "react"
import { UserBookDetails } from "./UserBookDetails"
import { UserBookForm } from "./UserBookForm"

export const UserBookDetailsView = (props) => {

    return (
        <div className='userBook-details-container'>
            <UserBookDetails />
            <UserBookForm />
        </div>
    )
}