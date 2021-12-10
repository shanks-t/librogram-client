import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { getUserBook, updateUserBook } from "./UserManager"

export const UserBookForm = () => {
    const [ userBook, setUserBook ] = useState({})
    const [ ratingObj, setRatingObj ] = useState({
        "rating": 0
    })
    const history = useHistory()
    const { userBookId } = useParams()

    const handleOnChange = (event) => {
        const copyUserBook = { ...userBook }
        copyUserBook[event.target.name] = event.target.value
        setUserBook(copyUserBook)
    }

    useEffect(() => {
        if (userBookId) {
            getUserBook(userBookId).then((data) => setUserBook({
            ...data,
            rating: data.rating,
            review: data.review,
            startDate: data.start_date,
            finishDate: data.finish_date,
            currentPage: data.current_page,
            statusId: data.status
            }))
        }
    }, [userBookId])

    const getRatingsState = (event) => {
        const copyRating = { ...ratingObj }
        copyRating['rating'] = event.target.value
        setRatingObj(copyRating)
    }

    const updateUserBookFields = (event) => {
        event.preventDefault()

        updateUserBook(userBookId, userBook).then(() => {
            history.push('/profile/books')
        })
    }

    useEffect(() => {
        console.log('userBook', userBook)
    }, [userBook]);
    console.log('userbookId', userBookId)
    return (
        <form>
            <div>
                <label>rating</label>
                <input name='rating' type='range' min='1' max='10' defaultValue='10' step='0.1' onChange={(event) => getRatingsState(event)}></input>
                            {ratingObj.rating ?
                                <p>Rating: {ratingObj.rating}</p>
                                : <p>Rating: Rate this game</p>
                            }
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
            {/* <div>
                <label>Book Status</label>
                <select type="number" name="statusId" value={userBook.statusId} onChange={(event) => handleOnChange(event)}>
                    <option value='0'>Select a Status</option>
                    {
                        statuses.map(status => <option value={status.id}>{status.label}</option>)
                    }
                </select>
            </div> */}
            <div>
                <button onClick={(event) => {
                        updateUserBookFields(event)
                    }}>Update Book Details</button>
            </div>
        </form>
    )
}