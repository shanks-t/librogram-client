import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getReadingGoal, saveReadingGoal, updateReadingGoal } from "./ReadingGoalManager"


export const ReadingGoalForm = ({ goalId, handleShowForm }) => {
    const [ readingGoal, setReadingGoal ] = useState({})
    const history = useHistory()


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

        saveReadingGoal(readingGoal).then(() => {
            
        })
    }

    const updateGoal = (event) => {
        event.preventDefault()

        updateReadingGoal(goalId, readingGoal).then(() => {
            history.push('/profile')
        })
    }
    useEffect(() => {
        console.log('ReadingGoal', readingGoal)
        console.log('goalId', goalId)
    }, [readingGoal]);

    return (
        <form>
            <div>
                <label>number of books</label>
                <input name='numberOfBooks' type='number' min='1' max='400' value={readingGoal.numberOfBooks} step='1' onChange={(event) => handleOnChange(event)}></input>
            </div>

            <div>
                <label>number of pages</label>
                <input type="number" name="numberOfPages" step='20' value={readingGoal.numberOfPages} onChange={(event) => handleOnChange(event)}></input>
            </div>

            <div>
                <label>start date</label>
                <input type="date" name="startDate" value={readingGoal.startDate} onChange={(event) => handleOnChange(event)}></input>
            </div>

            <div>
                <label>end date</label>
                <input type="date" name="endDate" value={readingGoal.endDate} onChange={(event) => handleOnChange(event)}></input>
            </div>
            <div>
                <button onClick={(event) => {
                       if (goalId) {
                        updateGoal(event); handleShowForm()
                    } else {
                        saveGoal(event); handleShowForm()
                    }
                    }}>Save Goal</button>
            </div>
        </form>
    )
}