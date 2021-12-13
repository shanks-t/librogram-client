import React, { useEffect, useState } from "react"
import { Link, useHistory } from 'react-router-dom'
import { getReadingGoals } from "./ReadingGoalManager"
import "./ReadingGoal.css"

export const ReadingGoalsList = (props) => {
    const [ goals, setGoals ] = useState([])
    const history = useHistory()

    const goalsFetch = () => {
        getReadingGoals(). then(data => setGoals(data))
    }
    
    useEffect(() => {
        goalsFetch()
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
                    {goal.status == 'completed' ? (<li className='complete'><b >You Completed This Reading Goal!</b></li>) : (<li className='incomplete'><b>Reading Goal Incomplete</b></li>)}
                    </>
            })
        }
        </ul>
    </article>

    </>
    )
    }