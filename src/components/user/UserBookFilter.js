import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserManager";

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import styled from 'styled-components'

export const UserBookFilter = ({ handleSearch, showFilters, filters, books}) => {
    const [ tags, setTags ] = useState([])
    const { userBooks } = useContext(UserContext)

 
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

const StyledDiv = styled.div`
display: flex;
align-items: center;
`
useEffect(() => {
    console.log('usertags', tags)
}, [tags]);
    return (
        <div className="filter-container">
            <StyledDiv className="filter-icon" style={{display: 'flex'}}>
                <h3 style={{color: 'aliceblue'}}>Filters</h3>
                <button onClick={showFilters}>{filters ? <VisibilityOffIcon/> : <VisibilityIcon/>}</button>
            </StyledDiv>
    
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
                            <option value={100}> greater than 100 </option>
                            <option value={200}> greater than 200 </option>
                            <option value={300}> greater than 300 </option>
                            <option value={500}> greater than 500 </option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <select name="rating" defaultValue={0} onChange={(event) => handleSearch(event)}>
                            <option value={0}>All Ratings</option>
                            <option value={5.1}> rated 5 - 10 </option>
                            <option value={4.9}> rated 0 - 5 </option>
                        </select>
                    </fieldset>
                </div>
            </>
            : ""}
        </div>
    )
}