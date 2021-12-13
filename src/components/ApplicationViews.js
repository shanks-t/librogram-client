import React from "react"
import { Route } from "react-router-dom"
import { Search } from "./book/Search"
import { ReadingGoalsList } from "./readingGoal/ReadingGoalsList"
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
            <Route exact path="/profile/books/:bookId(\d+)/:userBookId(\d+)">
                <UserBookDetailsView />
            </Route>
            <Route exact path="/goals">
                <ReadingGoalsList />
            </Route>
        </main>
    </>
}
