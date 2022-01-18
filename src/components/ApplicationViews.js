import React from "react"
import { Route } from "react-router-dom"
import { Search } from "./book/Search"
import { ReadingGoalForm } from "./readingGoal/ReadingGoalForm"
import { ReadingGoalsList } from "./readingGoal/ReadingGoalsList"
import { UserBookDetailsView } from "./user/UserBookDetailView"
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
            <Route exact path="/goals/create">
                <ReadingGoalForm />
            </Route>
            <Route exact path="/goals/edit/:goalId(\d+)">
                <ReadingGoalForm />
            </Route>
        </main>
    </>
}
