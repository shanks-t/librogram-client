import React, { useEffect, useState } from "react"
import { useParams, useHistory } from 'react-router-dom'
import { getBooksByUser, getCurrentUser } from "./UserManager"
import { UserLibrary } from "./UserLibrary"
import { UserBio } from "./UserBio"
import { UserBookSearch } from "./UserBookSearch"

export const UserProfile = (props) => {

    const [ user, setUser ] = useState({})

    const getUser = () => {
        getCurrentUser().then(data => setUser(data))
    }

    useEffect(() => {
        getUser()
    }, []);

    return (
        <div className="container">
            <div className="modal-btn">
                <button type="button" data-modal="modal-one">Open modal one</button>
            </div>
            <div className='profile-container'>
                <UserBio user={user}/>
                <UserLibrary user={user}/>
            </div>
        </div>
        )
}