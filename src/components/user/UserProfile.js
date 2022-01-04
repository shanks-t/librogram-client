import React, { useEffect, useState, useContext, createContext } from "react"
import { useParams, useHistory } from 'react-router-dom'
import { getBooksByUser, getCurrentUser } from "./UserManager"
import { UserLibrary } from "./UserLibrary"
import { UserBio } from "./UserBio"
import { CurrentUserProvider, useCurrentUser } from "./UserContext"


export const UserProfile = (props) => {
    const [ user, setUser ] = useState({})

    const getUser = () => {
        getCurrentUser().then(data => setUser(data))
    }

    useEffect(() => {
        getUser()
    }, []);

    return (
        <CurrentUserProvider value={user}>

        <div className="container">
            <div className="modal-btn">
                <button type="button" data-modal="modal-one">Open modal one</button>
            </div>
            <div className='profile-container'>
                <UserBio />
                <UserLibrary user={user}/>
            </div>
        </div>
        </CurrentUserProvider>
        )
}