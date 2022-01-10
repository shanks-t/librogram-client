import React, { useState, useEffect, useContext } from "react"
import { Route, Redirect } from "react-router-dom"

import { ApplicationViews } from "./ApplicationViews"

import { Footer } from "./footer/Footer"
import NavWithSearch from "./nav/NavWithSearch"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import ModalManager from "./ModalManager"
import { CurrentUserProvider } from "./user/UserManager"
import './Librogram.css'

export const Librogram = () => {
    const [modalOpen, setModal] = useState(false);

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
        <CurrentUserProvider>
            <Route render={() => {
                if (localStorage.getItem("lg_user_token")) {
                    return <>
                        <Route>
                            <div className="app--shell" onClick={openModal}>
                            <NavWithSearch />
                            <ApplicationViews />
                            <ModalManager closeFn={closeModal} modal={modalOpen} />
                            <Footer/>
                            </div>
                        </Route>
                    </>
                } else {
                    return <Redirect to="/login" />
                }
            }} />

        </CurrentUserProvider>

            <Route path="/login">
                <Login />
            </Route>

            <Route path="/register">
                <Register />
            </Route>

        </>
    )
}