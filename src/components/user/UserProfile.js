import React, { useEffect, useState } from "react"
import { useParams, useHistory } from 'react-router-dom'
import { getBooksByUser, getCurrentUser } from "./UserManager"
import { UserLibrary } from "./UserLibrary"
import { UserBio } from "./UserBio"
export const UserProfile = (props) => {

    return (
        <div className='profile-container'>
            <UserBio />
            <UserLibrary />
        </div>
    )
}