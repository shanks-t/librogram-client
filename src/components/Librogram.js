import React, { useState, useEffect } from "react"
import { Route, Redirect } from "react-router-dom"

import { ApplicationViews } from "./ApplicationViews"

import { Footer } from "./footer/Footer"
import NavWithSearch from "./nav/NavWithSearch"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { getCurrentUser } from "./user/UserManager"
import { CurrentUserProvider } from "./user/UserContext"
import ModalManager from "./ModalManager"


export const Librogram = () => {
    const [modalOpen, setModal] = useState(false);
    const [ user, setUser ] = useState({})

    const getUser = () => {
        getCurrentUser().then(data => setUser(data))
    }

    useEffect(() => {
        getUser()
    }, []);

    const openModal = event => {
        event.preventDefault();
        const {
            target: {
                dataset: { modal }
            }
        } = event;
        if (modal) setModal(modal);
    };

    const closeModal = () => {
        setModal('');
    };
    return (
        <>
            <Route render={() => {
                if (localStorage.getItem("lg_user_token")) {
                    return <>
                        <Route>
                            <CurrentUserProvider value={user}>
                            <div className="app--shell" onClick={openModal}>
                            <NavWithSearch />
                            <ApplicationViews />
                            <ModalManager closeFn={closeModal} modal={modalOpen} />
                            <Footer/>
                            </div>
                            </CurrentUserProvider>
                        </Route>
                    </>
                } else {
                    return <Redirect to="/login" />
                }
            }} />

            <Route path="/login">
                <Login />
            </Route>

            <Route path="/register">
                <Register />
            </Route>

        </>
    )
}