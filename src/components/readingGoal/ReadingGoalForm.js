import React, { useContext, useEffect, useState } from "react"
import { getReadingGoal, saveReadingGoal, updateReadingGoal } from "./ReadingGoalManager"
import { UserContext } from "../user/UserManager"

export const ReadingGoalForm = ({ goalId, handleShowForm }) => {
    const [ readingGoal, setReadingGoal ] = useState({})
    const { getCurrentUser } = useContext(UserContext)

    const handleOnChange = (event) => {
        const copyReadingGoal = { ...readingGoal }
        copyReadingGoal[event.target.name] = event.target.value
        setReadingGoal(copyReadingGoal)
    }

    useEffect(() => {
        if (goalId) {
            getReadingGoal(goalId).then((data) => setReadingGoal({
            ...data,
            numberOfBooks: data.number_of_books,
            numberOfPages: data.number_of_pages,
            startDate: data.start_date,
            endDate: data.end_date,
            }))
        }
    }, [goalId])



    const saveGoal = (event) => {
        event.preventDefault()
        if (!readingGoal.endDate) {
            window.alert('please add an end date for goal')
        } else {
            saveReadingGoal(readingGoal).then(() => {
                handleShowForm()
        }).then(() => getCurrentUser())
    }}

    const updateGoal = (event) => {
        event.preventDefault()
        if (!readingGoal.endDate) {
            window.alert('please add an end date for goal')
        } else {
            updateReadingGoal(goalId, readingGoal).then(() => {
                handleShowForm()
        })
    }}
    
    useEffect(() => {
        console.log('ReadingGoal', readingGoal)
        console.log('goalId', goalId)
    }, [readingGoal]);

    return (
        <form>
            <div>
                <label>number of books</label>
                <input required name='numberOfBooks' type='number' min='1' max='400' value={readingGoal.numberOfBooks} step='1' onChange={(event) => handleOnChange(event)}></input>
            </div>

            <div>
                <label>start date</label>
                <input type="date" name="startDate" value={readingGoal.startDate} onChange={(event) => handleOnChange(event)}></input>
            </div>

            <div>
                <label>end date</label>
                <input required='required' type="date" name="endDate" value={readingGoal.endDate} onChange={(event) => handleOnChange(event)}></input>
            </div>
            <div>
                <button onClick={(event) => {
                       if (goalId) {
                        updateGoal(event)
                    } else {
                        saveGoal(event)
                    }
                    }}>Save Goal</button>
                    <button onClick={(event) => handleShowForm()}>cancel</button>
            </div>
        </form>
    )
}