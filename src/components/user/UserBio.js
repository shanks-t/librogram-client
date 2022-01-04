import React, { useEffect, useState } from "react"
import { useCurrentUser } from "./UserContext"
import { getCurrentUser } from "./UserManager"
import "./UserProfile.css"


export const UserBio = (props) => {
    const user = useCurrentUser()
    // const [user, setUser] = useState({})


    // const fetchUserInfo = () => {
    //     getCurrentUser().then(data => setUser(data))
    // }

    // useEffect(() => {
    //     fetchUserInfo()
    // }, [user?.profile_image_url, user?.bio]);

    // useEffect(() => {
    //     console.log('user', user)
    // }, [user]);

    return (
        <>

            <article className="user-bio">
                <img className='profile-img' src={user?.profile_image_url} /><h3>{user?.user?.username}</h3>
                <p>{user?.user?.first_name} {user?.user?.last_name}</p>
                <p>{user?.bio}</p>
            </article>
        </>
    )
}