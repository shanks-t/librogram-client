import React from "react"
import { UserLibrary } from "./UserLibrary"
import { UserBio } from "./UserBio"

import './UserView.css'

export const UserProfile = (props) => {

    return (
     

        <div className="container">
            <div className='profile-container'>
                <div className="user-bio">
                <UserBio />
                </div>
                <UserLibrary />
            </div>
        </div>

        )
}