import React from "react"
import { Route } from "react-router-dom"
import { Search } from "./book/Search"

export const ApplicationViews = () => {
    return <>
        <main>
            <Route exact path="/search">
                <Search />
            </Route>
        </main>
    </>
}
