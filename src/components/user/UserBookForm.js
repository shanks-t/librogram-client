import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "./UserManager"

export const UserBookForm = () => {
    const [ statuses, setStatuses ] = useState([])
    const { getStatuses, updateUserBook, setUserBook, userBook, getUserBook, getCurrentUser } = useContext(UserContext)

    useEffect(() => {
        getStatuses().then(data => setStatuses(data))
    }, []);

    const handleOnChange = (event) => {
        const copyUserBook = { ...userBook }
        copyUserBook[event.target.name] = event.target.value
        setUserBook(copyUserBook)
    }

    useEffect(() => {
           setUserBook({
            id: userBook.id,   
            rating: userBook.rating,
            review: userBook.review,
            startDate: userBook.start_date,
            finishDate: userBook.finish_date,
            currentPage: userBook.current_page,
            statusId: userBook.status.id
            })
    }, [])



    const updateUserBookFields = (event) => {
        event.preventDefault()

        updateUserBook(userBook.id, userBook).then(() => {
            getUserBook(userBook.id).then(() => getCurrentUser())
        })
    }

    useEffect(() => {
        console.log('userBook', userBook)
        console.log('status', statuses)
    }, [userBook, statuses]);

    return (
        <form>
            <div>
                <label>rating</label>
                <input name='rating' type='range' min='1' max='10' value={userBook.rating} step='0.1' onChange={(event) => handleOnChange(event)}></input>
                    <p>Rating: {userBook.rating}</p>
            </div>

            <div>
                <label>review</label>
                <input type="textField" name="review" value={userBook.review} onChange={(event) => handleOnChange(event)}></input>
            </div>

            <div>
                <label>start date</label>
                <input type="date" name="startDate" value={userBook.startDate} onChange={(event) => handleOnChange(event)}></input>
            </div>

            <div>
                <label>finish date</label>
                <input type="date" name="finishDate" value={userBook.finishDate} onChange={(event) => handleOnChange(event)}></input>
            </div>
            <div>
                <label>current page</label>
                <input type="number" name="currentPage" value={userBook.currentPage} onChange={(event) => handleOnChange(event)}></input>
            </div>
            <div>
                <label>Book Status</label>
                <select type="number" name="statusId" value={userBook.statusId} onChange={(event) => handleOnChange(event)}>
                    <option value='0'>Select a Status</option>
                    {
                        statuses.map(status => <option  value={status.id}>{status.label}</option>)
                    } 
                </select>
            </div>
            <div>
                <button onClick={(event) => {
                        updateUserBookFields(event)
                    }}>Update Book Details</button>
            </div>
        </form>
    )
}