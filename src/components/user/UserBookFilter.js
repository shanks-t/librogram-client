import React, { useContext, useEffect, useReducer, useState } from "react";
import { UserContext } from "./UserManager";

export const UserBookFilter = ({ handleSearch, showFilters, filters, books}) => {
    const [ tags, setTags ] = useState([])
    const { getBooksByUser, user, userBooks } = useContext(UserContext)

 
useEffect(() => {
    getUserTags(userBooks)
}, [userBooks]);

const getUserTags = (arr) => {
     
    const userTags = []
        for (const book of arr) {
            book.book.tags.map(tag => userTags.push(tag))
        }
        setTags(userTags)
}

useEffect(() => {
    console.log('usertags', tags)
}, [tags]);
    return (
        <div className="filter-container">
            <div>
                Filter <button onClick={showFilters}>{filters ? "⬆️" : "⬇️"}</button>
            </div>
    
        {filters ?
            <>
                <div className="filters">
                    <fieldset>
                        <select name="tag" defaultValue={0} onChange={handleSearch}>
                            <option value={0}>All Tags</option>
                            {tags.filter((tag, index, self) => index === self.findIndex((obj) => (obj.label === tag.label))).map(tag => {
                                return <option value={tag.id}>{tag.label}</option>
                            })}
                        </select>
                    </fieldset>
                    <fieldset>
                        <select name="bookLength" defaultValue={0} onChange={(event) => handleSearch(event)}>
                            <option value={0}>All Book Lengths</option>
                            <option value={100}> 100 pages or less</option>
                            <option value={200}> 200 pages or less</option>
                            <option value={300}> 300 pages or less</option>
                            <option value={500}> 500 pages or less</option>
                        </select>
                    </fieldset>
                </div>
            </>
            : ""}
        </div>
    )
}