import React, { useRef, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

//import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import { Container } from "@mui/material/";
import { Button } from "@mui/material/";
import { Typography } from "@mui/material/";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";

import { MdMenuBook } from "react-icons/md";
import "./Auth.css";

export const Register = (props) => {
    const firstName = useRef();
    const lastName = useRef();
    const username = useRef();
    const email = useRef();
    const profileImageUrl = useRef()
    const bio = useRef();
    const [isAdmin, setAdmin] = useState(false)
    const password = useRef();
    const verifyPassword = useRef();
    const passwordDialog = useRef();
    const history = useHistory();

    useEffect(() => {
        console.log('isadmin:', isAdmin)

    }, [isAdmin]);

    const handleAdminCheckbox = () => {
        if (isAdmin) {
            setAdmin(false)
        } else {
            setAdmin(true)
        }
    }

    const handleRegister = (e) => {
        e.preventDefault();

        if (password.current.value === verifyPassword.current.value) {
            const newUser = {
                first_name: firstName.current.value,
                last_name: lastName.current.value,
                email: email.current.value,
                profile_image_url: profileImageUrl.current.value,
                username: username.current.value,
                bio: bio.current.value,
                password: password.current.value,
                is_staff: isAdmin,
                active: 1,
                subscriber: false
            };

            return fetch("https://librogram.herokuapp.com/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(newUser),
            })
                .then((res) => res.json())
                .then(res => {
                    if ("token" in res) {
                        localStorage.setItem("lg_user_token", res.token);
                        history.push("/profile");
                    }
                });
        } else {
            passwordDialog.current.showModal();
        }
    };

    return (
        <main style={{ textAlign: "center" }}>
            <dialog className="dialog dialog--password" ref={passwordDialog}>
                <div>Passwords do not match</div>
                <button
                    className="button--close"
                    onClick={(e) => passwordDialog.current.close()}
                >
                    Close
                </button>
            </dialog>

            <Container align='center'>
                <form className="form--login" onSubmit={handleRegister}>
                    <Typography
                        variant='h3'
                        align='center'
                        style={{color:"#f0f8ff"}}
                    >Please sign in
                    </Typography>
                    <MdMenuBook className="book-icon-register" />
                    <fieldset className='register'>
                        <label htmlFor="firstName" style={{color:"#f0f8ff"}}> First Name </label>
                        <input
                            ref={firstName}
                            type="text"
                            name="firstName"
                            className="form-control"
                            placeholder="First name"
                            required
                            autoFocus
                        />
                    </fieldset>
                    <fieldset className='register'>
                        <label htmlFor="lastName" style={{color:"#f0f8ff"}}> Last Name </label>
                        <input
                            ref={lastName}
                            type="text"
                            name="lastName"
                            className="form-control"
                            placeholder="Last name"
                            required
                        />
                    </fieldset>
                    <fieldset className='register'>
                        <label htmlFor="username" style={{color:"#f0f8ff"}}> Username </label>
                        <input
                            ref={username}
                            type="text"
                            name="username"
                            className="form-control"
                            placeholder="username"
                            required
                        />
                    </fieldset>
                    <fieldset className='register'>
                        <label htmlFor="bio" style={{color:"#f0f8ff"}}> Bio </label>
                        <textarea
                            ref={bio}
                            rows={6}
                            type="text"
                            name="bio"
                            className="form-control"
                            placeholder="bio"
                            required
                        />
                    </fieldset>
                    <fieldset className='register'>
                        <label htmlFor="inputEmail" style={{color:"#f0f8ff"}}> Email address </label>
                        <input
                            ref={email}
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email address"
                            required
                        />
                    </fieldset>
                    <fieldset className='register'>
                        <label htmlFor="profileImageUrl" style={{color:"#f0f8ff"}}> User Photo </label>
                        <input
                            ref={profileImageUrl}
                            type="text"
                            name="profileImageUrl"
                            className="form-control"
                            placeholder="photo url"
                            required
                        />
                    </fieldset>
                    <fieldset className='register'>
                        <label htmlFor="inputPassword" style={{color:"#f0f8ff"}}> Password </label>
                        <input
                            ref={password}
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Password"
                            required
                        />
                    </fieldset>
                    <fieldset className='register'>
                        <label htmlFor="verifyPassword" style={{color:"#f0f8ff"}}> Verify Password </label>
                        <input
                            ref={verifyPassword}
                            type="password"
                            name="verifyPassword"
                            className="form-control"
                            placeholder="Verify password"
                            required
                        />
                    </fieldset>
                    <FormGroup sx={{ alignItems: 'center'}}>
                        <FormControlLabel style={{color:"#f0f8ff"}} control={<Checkbox name='isAdmin' onChange={() => {
                            handleAdminCheckbox()
                        }} />} label="Are you and Administrator?" />
                    </FormGroup>
                    <Button sx={{ m: 2 }} variant='contained' className="btn btn-1 btn-sep icon-send" type="submit">Sign In</Button>
                </form>
                <section className="link--register" style={{color:"#f0f8ff"}}>
                    Already registered? <Link to="/login">Login</Link>
                </section>
            </Container>
        </main>
    );
};
