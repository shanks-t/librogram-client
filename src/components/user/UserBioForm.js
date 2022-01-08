import React, { useEffect, useState } from "react"


import { getCurrentUser, updateReaderBio } from "./UserManager"
import { Form, Button } from 'react-bootstrap'

export const UserBioForm = ({ close }) => {
    const [userBio, setUserBio] = useState({})
    const [userId, setUserId] = useState({})

    const handleOnChange = (event) => {
        const copyUserBio = { ...userBio }
        copyUserBio[event.target.name] = event.target.value
        setUserBio(copyUserBio)
    }

    const fetchUserInfo = () => {
        getCurrentUser().then(data => setUserBio({
            ...data,
            id: data.user.id,
            bio: data.bio,
            profileImageUrl: data.profile_image_url
        }))
    }

    useEffect(() => {
        fetchUserInfo()
    }, []);

    const handleClick = (event) => {
        event.preventDefault()
        updateReaderBio(userBio.id, userBio).then(() => close())
    }

    useEffect(() => {
        setUserId(userBio.id)
        console.log(userBio.id)
    }, [userBio]);
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBio">
                <Form.Label>Bio</Form.Label>
                <Form.Control name='bio' type="textarea" 
                value={userBio.bio}
                rows={4} 
                placeholder="Enter Bio" 
                onChange={(event) => handleOnChange(event)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='profileImageUrl' type="url" 
                value={userBio.profile_image_url}
                placeholder="Password" 
                onChange={(event) => handleOnChange(event)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" onClick={(event) => {handleClick(event)}}>
                Submit
            </Button>
        </Form>
    )
}

