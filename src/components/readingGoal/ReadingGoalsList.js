import React, { useEffect, useState } from "react"
import { Link, useHistory } from 'react-router-dom'
import { ProgressBar } from './ProgressBar'
import { getCurrentUser, getGoalsByUser } from "./ReadingGoalManager"
import "./ReadingGoal.css"

export const ReadingGoalsList = (props) => {
    const [ goals, setGoals ] = useState([])
    const [ userId, setUserId ] = useState()
    const history = useHistory()

    const getUserId = () => {
        getCurrentUser().then(data => setUserId(data.id))
    }
    const goalsFetch = () => {
        getGoalsByUser().then(data => setGoals(data))
    }
    
    useEffect(() => {
        goalsFetch()
    }, [userId]);
    
    useEffect(() => {
       getUserId()
    }, []);

    useEffect(() => {
        console.log('goals', goals)
    }, [goals]);
    return (
        <>
        
        <article className="goals">
        <button onClick={()=>history.push('goals/create')}>Create a New Reading Goal</button>
        <ul>
        {
                goals.map(goal => {
                    return <>
                    <li key={`goal--${goal.id}`} className="goal">
                        <Link to={`goals/edit/${goal.id}`}>{goal.id}</Link>
                    </li>
                    {goal.number_of_pages ? (<li>number of pages:{goal.number_of_pages}</li>) : null}
                    {goal.number_of_books ? (<li>number of books:{goal.number_of_books}</li>) : null}
                    <li>start date:{goal.start_date}</li>
                    <li>end date:{goal.end_date}</li>
                    <div className='progress'>
                    <ProgressBar completed={goal.status} />

                    </div>
                    {goal.status == 'completed' ? (<li className='complete'><b >You Completed This Reading Goal!</b></li>) : (<li className='incomplete'><b>Reading Goal Incomplete</b></li>)}
                    </>
            })
        }
        </ul>
    </article>

    </>
    )
    }