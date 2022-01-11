import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { UserContext } from "./UserManager"

export const ReaderDetails = ({ userBook }) => {
    const [ updatedUserBook, setUpdatedUserBook ] = useState({})
    const [ statuses, setStatuses ] = useState([])
    const { getStatuses, updateUserBook, setUserBook } = useContext(UserContext)

    // useEffect(() => {
    //     getStatuses().then(data => setStatuses(data))
    // }, []);

    // const handleOnChange = (event) => {
    //     const copyUserBook = { ...userBook }
    //     copyUserBook[event.target.name] = event.target.value
    //     setUserBook(copyUserBook)
    // }

    // useEffect(() => {
    //     if (userBook) {
    //        setUserBook({
    //         id: userBook.id,   
    //         rating: userBook.rating,
    //         review: userBook.review,
    //         startDate: userBook.start_date,
    //         finishDate: userBook.finish_date,
    //         currentPage: userBook.current_page,
    //         statusId: userBook?.status?.id
    //         })
    //     }
    // }, [])

    return (
        <>
            <h4>Reader Details for <i>{userBook.book.title}</i> </h4>
            <div>
                <label>Rating: {userBook.rating}</label>
            </div>
            <div>
                <label>Review: {userBook.review}</label>
            </div>
            <div>
                <label>Start Date: {userBook.start_date}</label>
            </div>
            <div>
                <label>Finish Date: {userBook.finish_date}</label>
            </div>
            <div>
                <label>Book Status: {userBook.status.label}</label>
            </div>
        </>
    )
}