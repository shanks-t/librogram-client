import React, { useEffect, useState } from "react"
import { useParams, useHistory } from 'react-router-dom'
import { getBooksByUser, getCurrentUser } from "./UserManager"
import "./UserProfile.css"

export const UserBio = (props) => {
    const [user, setUser] = useState({})
    const history = useHistory()


    const fetchUserInfo = () => {
        getCurrentUser().then(data => setUser(data))
    }

    useEffect(() => {
        fetchUserInfo()
    }, []);

    useEffect(() => {
        console.log('user', user)
    }, [user]);

    return (
        <>

            <article className="user-bio">
                <img className='profile-img' src={user.profile_image_url} /><h3>{user?.user?.username}</h3>
                <p>{user?.user?.first_name} {user?.user?.last_name}</p>
                <p>{user?.bio}</p>
                <ul>
                    
                </ul>
            </article>
        </>
    )
}