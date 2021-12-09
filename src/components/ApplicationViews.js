import React from "react"
import { Route } from "react-router-dom"
import { Search } from "./book/Search"
import { UserLibrary } from "./user/UserLibrary"
import { UserProfile } from "./user/UserProfile"

export const ApplicationViews = () => {
    return <>
        <main>
            <Route exact path="/search">
                <Search />
            </Route>
            <Route exact path="/profile">
                <UserProfile />
            </Route>
        </main>
    </>
}
