export const updateReadingGoal = (goalId, goal) => {
    return fetch(`http://localhost:8000/reading_goals/${goalId}/edit`, {
        method: "PATCH",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(goal)
    })
}

export const saveReadingGoal = (goal) => {
    return fetch("http://localhost:8000/reading_goals", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(goal)
    })

}

export const getReadingGoal = goalId => {
    return fetch(`http://localhost:8000/reading_goals/${goalId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`
        }
    })
        .then(response => response.json())
}

export const getReadingGoals = () => {
    return fetch(`http://localhost:8000/reading_goals`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`
        }
    })
        .then(response => response.json())
}

export const getGoalsByUser = (userId) => {
    return fetch(`http://localhost:8000/reading_goals?user_id=${userId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`
        }
    })
        .then(response => response.json())
}

export const getCurrentUser = () => {
    return fetch(`http://localhost:8000/currentuser`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lg_user_token")}`
        }
    })
        .then(response => response.json())
}
