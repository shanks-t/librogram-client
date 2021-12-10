import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"

export const UserBookForm = () => {
    const [ userBook, setUserBook ] = useState({})
    const history = useHistory()
    const { userBookId } = useParams()

    const handleOnChange = (event) => {
        const copyGame = { ...game }
        copyGame[event.target.name] = event.target.value
        setGameState(copyGame)
    }

    useEffect(() => {
            getGame(userBookId).then((data) => setUserBook({
            ...data,
            title: data.title,
            designer: data.designer,
            yearReleased: data.year_released,
            playTime: data.play_time,
            ageRecommendation: data.age_recommendation,
            categoryId: data.category_id
            }))
    }, [userBookId])

    const saveUserBook = (event) => {
        event.preventDefault()

        createUserBook(game).then(() => {
            history.push('/profile/books')
        })
    }

    const updateGame = (event) => {
        event.preventDefault()

        updateGameFetch(game).then(() => {
            history.push('/profile/books')
        })
    }

    return (
        <form>
            <div>
                <label>Title</label>
                <input type="text" name="title"  value={game.title} onChange={(event) => handleOnChange(event)}></input>
            </div>

            <div>
                <label>Designer</label>
                <input type="text" name="designer" value={game.designer} onChange={(event) => handleOnChange(event)}></input>
            </div>

            <div>
                <label>Year Released</label>
                <input type="number" name="yearReleased" value={game.yearReleased} onChange={(event) => handleOnChange(event)}></input>
            </div>

            <div>
                <label>Play Time</label>
                <input type="number" name="playTime" value={game.playTime} onChange={(event) => handleOnChange(event)}></input>
            </div>
            <div>
                <label>Age Recommendation</label>
                <input type="number" name="ageRecommendation" value={game.ageRecommendation} onChange={(event) => handleOnChange(event)}></input>
            </div>
            <div>
                <label>Categories</label>
                <select type="number" name="categoryId" value={game.categoryId} onChange={(event) => handleOnChange(event)}>
                    <option value='0'>Select a Category</option>
                    {
                        categories.map(category => <option value={category.id}>{category.label}</option>)
                    }
                </select>
            </div>
            <div>
                <button onClick={(event) => {
                    if (gameId) {
                        updateGame(event)
                    } else {
                        saveGame(event)
                    }}
                }>Save Game</button>
            </div>
        </form>
    )
}