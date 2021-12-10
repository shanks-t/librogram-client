import React from "react"
import { Route } from "react-router-dom"
import { Search } from "./book/Search"
import { UserBookDetails } from "./user/UserBookDetails"
import { UserBookDetailsView } from "./user/UserBookDetailView"
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
            <Route exact path="/profile/books/:bookId(\d+)">
                <UserBookDetailsView />
            </Route>
        </main>
    </>
}
