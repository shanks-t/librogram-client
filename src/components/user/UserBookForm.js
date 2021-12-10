import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { getUserBook, updateUserBook } from "./UserManager"

export const UserBookForm = () => {
    const [ userBook, setUserBook ] = useState({})
    const history = useHistory()
    const { userBookId } = useParams()

    const handleOnChange = (event) => {
        const copyUserBook = { ...userBook }
        copyUserBook[event.target.name] = event.target.value
        setUserBook(copyUserBook)
    }

    useEffect(() => {
            getUserBook(userBookId).then((data) => setUserBook({
            ...data,
            rating: data.rating,
            review: data.review,
            startDate: data.start_date,
            finishDate: data.finish_date,
            currentPage: data.current_page,
            statusId: data.status
            }))
    }, [userBookId])



    const updateUserBookFields = (event) => {
        event.preventDefault()

        updateUserBook(userBook).then(() => {
            history.push('/profile/books')
        })
    }

    return (
        <form>
            <div>
                <label>rating</label>
                <input type="text" name="rating"  value={userBook.rating} onChange={(event) => handleOnChange(event)}></input>
            </div>

            <div>
                <label>review</label>
                <input type="text" name="review" value={userBook.review} onChange={(event) => handleOnChange(event)}></input>
            </div>

            <div>
                <label>start date</label>
                <input type="number" name="startDate" value={userBook.startDate} onChange={(event) => handleOnChange(event)}></input>
            </div>

            <div>
                <label>finish date</label>
                <input type="number" name="finishDate" value={userBook.finishDate} onChange={(event) => handleOnChange(event)}></input>
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
                    }}>Save Game</button>
            </div>
        </form>
    )
}