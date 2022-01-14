import React, { useEffect, useState } from "react"
import { Link, useHistory } from 'react-router-dom'

import { getReadingGoals } from "./ReadingGoalManager"
import { ProgressBar } from "./ProgressBar"
import { deleteReadingGoal } from "./ReadingGoalManager"
import { ReadingGoalForm } from "./ReadingGoalForm"
import "./ReadingGoal.css"

export const ReadingGoalsList = ({ close }) => {
    const [goals, setGoals] = useState([])
    const [ showForm, setShowForm ] = useState(false)
    const [ goal, setGoal ] = useState({})
    const history = useHistory()

    const goalsFetch = () => {
        getReadingGoals().then(data => setGoals(data))
    }

    useEffect(() => {
        goalsFetch()
    }, [showForm]);

    useEffect(() => {
        console.log('goals', goals)
    }, [goals]);


    const handleDelete = (goalId) => {
        deleteReadingGoal(goalId).then(() => {
            goalsFetch()
        })
    }

    const handleShowForm = (goal) => {
        setShowForm(!showForm)
        setGoal(goal)
    }

    return (
        <>

            <article className="goals">
                
                { showForm ?
                    <ReadingGoalForm goalId={goal.id} handleShowForm={handleShowForm} />
                    :
                    goals.map(goal => {
                        return <>
                            
                        <div>
                            <button key={`goal--${goal.id}`} className="goal" onClick={() => handleShowForm(goal)}>
                            {goal.id}</button>
                                <button className="delete" onClick={(event) => {
                                    event.preventDefault()
                                    handleDelete(goal.id)}}>delete</button>
                            <ul>
                                {goal.number_of_pages ? (<li>number of pages: {goal.number_of_pages}</li>) : null}
                                {goal.number_of_books ? (<li>number of books: {goal.number_of_books}</li>) : null}
                                <li>start date:{goal.start_date}</li>
                                <li>end date:{goal.end_date}</li>
                            </ul>
                                <div className='progress'>
                                    <ProgressBar completed={goal.status} />
                                </div>
                        </div>
                        </>
                    })
                }
            </article>

        </>
    )
}