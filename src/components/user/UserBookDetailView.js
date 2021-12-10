import React, { useEffect, useState } from "react"
import { useParams, useHistory } from 'react-router-dom'
import { getBooksByUser, getCurrentUser } from "./UserManager"
import { UserLibrary } from "./UserLibrary"
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