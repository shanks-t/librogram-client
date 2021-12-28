import React, { useEffect, useState } from "react"
import { Link, useHistory } from 'react-router-dom'

import { getReadingGoals } from "./ReadingGoalManager"
import { ProgressBar } from "./ProgressBar"
import { deleteReadingGoal } from "./ReadingGoalManager"
import "./ReadingGoal.css"

export const ReadingGoalsList = (props) => {
    const [goals, setGoals] = useState([])
    const history = useHistory()

    const goalsFetch = () => {
        getReadingGoals().then(data => setGoals(data))
    }

    useEffect(() => {
        goalsFetch()
    }, []);

    useEffect(() => {
        console.log('goals', goals)
    }, [goals]);


    const handleDelete = (goalId) => {
        deleteReadingGoal(goalId).then(() => {
            goalsFetch()
        })
    }

    return (
        <>

            <article className="goals">
                <button onClick={() => history.push('goals/create')}>Create a New Reading Goal</button>
                {
                    goals.map(goal => {
                        return <>
                            <h3 key={`goal--${goal.id}`} className="goal">
                                <Link to={`goals/edit/${goal.id}`}>{goal.id}</Link>
                                <Link className="delete" onClick={(event) => {
                                    event.preventDefault()
                                    handleDelete(goal.id)}}>delete</Link>
                            </h3>
                            <ul>
                                {goal.number_of_pages ? (<li>number of pages:{goal.number_of_pages}</li>) : null}
                                {goal.number_of_books ? (<li>number of books:{goal.number_of_books}</li>) : null}
                                <li>start date:{goal.start_date}</li>
                                <li>end date:{goal.end_date}</li>
                            </ul>
                                <div className='progress'>
                                    <ProgressBar completed={goal.status} />
                                </div>
                        </>
                    })
                }
            </article>

        </>
    )
}