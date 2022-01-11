import React, { useRef } from "react"
import { Link, useHistory } from "react-router-dom"

import "./Auth.css"

import  Typography  from "@mui/material/Typography";
import  Container  from "@mui/material/Container";
import Button from '@mui/material/Button'

import { MdMenuBook } from "react-icons/md";


export const Login = () => {
    const username = useRef()
    const password = useRef()
    const invalidDialog = useRef()
    const history = useHistory()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch("http://127.0.0.1:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: username.current.value,
                password: password.current.value
            })
        })
            .then(res => res.json())
            .then(res => {
                if ("valid" in res && res.valid && "token" in res) {
                    localStorage.setItem("lg_user_token", res.token)
                    history.push("/profile")
                }
                else {
                    invalidDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={invalidDialog}>
                <div>Username or password was not valid.</div>
                <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
            </dialog>
            <Container className='form' align='center' >
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <Typography 
                        variant='h1'
                        color='primary'
                        align='center'
                        >Librogram
                        </Typography>
                    <Typography
                    variant='h3'
                    align='center'
                    color='textSecondary'
                    >Please sign in</Typography>
                    <MdMenuBook className="book-icon-login"/>
                    <fieldset className='login'>
                        <label htmlFor="inputUsername"> Username</label>
                        <input ref={username} type="username" id="username" className="form-control" placeholder="Username address" required autoFocus />
                    </fieldset>
                    <fieldset className='login'>
                        <label htmlFor="inputPassword"> Password </label>
                        <input ref={password} type="password" id="password" className="form-control" placeholder="Password" required />
                    </fieldset>
                    <div>
                    <Button sx={{ m: 2 }} variant='contained' className="btn-login" type="submit">Sign In</Button>
                    </div>
                </form>
                <Link to="/register">Not a member yet?</Link>
            </section>
            </Container>
        </main>
    )
}
