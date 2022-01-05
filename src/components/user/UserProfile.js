import React, { useEffect, useState, useContext, createContext } from "react"
import { useParams, useHistory } from 'react-router-dom'
import { getBooksByUser, getCurrentUser } from "./UserManager"
import { UserLibrary } from "./UserLibrary"
import { UserBio } from "./UserBio"

import './UserView.css'

export const UserProfile = (props) => {

    return (
     

        <div className="container">
            <div className='profile-container'>
                <UserBio />
                <UserLibrary />
            </div>
        </div>

        )
}