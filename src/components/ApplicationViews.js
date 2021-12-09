import React from "react"
import { Route } from "react-router-dom"
import { Search } from "./book/Search"
import { UserLibrary } from "./user/UserLibrary"

export const ApplicationViews = () => {
    return <>
        <main>
            <Route exact path="/search">
                <Search />
            </Route>
            <Route exact path="/profile">
                <UserLibrary />
            </Route>
        </main>
    </>
}
