import React from "react"
import { Link, useHistory, useParams } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {

    
    const history = useHistory()
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="nav-link" to="/profile">Profile</Link>
            </li>
            <li className="navbar__item">
                <Link className="nav-link" to="/search">Search</Link>
            </li>
            <li className="navbar__item">
                <Link className="nav-link" to="/goals">goals</Link>
            </li>
            {
                (localStorage.getItem("lg_user_token") !== null) ?
                    <li className="navbar__item">
                        <button className="nav-link"
                            onClick={() => {
                                localStorage.removeItem("lg_user_token")
                                history.push({ pathname: "/" })
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}
