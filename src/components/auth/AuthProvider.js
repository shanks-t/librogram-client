import React, { useState } from "react"

export const UserContext = React.createContext()

export const CurrentUserProvider = (props) => {
    const [user, setUser] = useState({events:[]})

    const getCurrentUser = () => {
        return fetch("http://localhost:8000/readers/currentuser", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("lg_user_token")}`
            }
        })
            .then(response => response.json())
            .then(setUser)
    }

    return (
        <UserContext.Provider value={{
            user, getCurrentUser
        }}>
            {props.children}
        </UserContext.Provider>
    )
}
