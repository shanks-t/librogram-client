import React, { useEffect, useState } from "react";
import { getTags } from "./UserManager"
import { Link } from "react-router-dom";

export const UserBookFilter = ({ handleSearch, showFilters, filters}) => {
    const [ tags, setTags ] = useState([])
    useEffect(() => {
        getTags().then(data => setTags(data))
    }, []);

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
                            {tags.map(tag => {
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