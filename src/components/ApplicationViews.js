import React from "react"
import { Route } from "react-router-dom"
import { Search } from "./book/Search"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
            <Route exact path="/search">
                <Search />
            </Route>
        </main>
    </>
}
