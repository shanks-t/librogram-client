import React, { useContext, useEffect, useState } from "react"

import { UserContext } from "./UserManager"
import { Form, Button } from 'react-bootstrap'

export const UserBioForm = ({ close }) => {
    const [ userBio, setUserBio] = useState({})
    const { user, updateReaderBio } = useContext(UserContext)

    const handleOnChange = (event) => {
        const copyUser = { ...user }
        copyUser[event.target.name] = event.target.value
        setUserBio(copyUser)
    }

    useEffect(() => {
        if (user) {
        setUserBio({
         id: user.id,
         bio: user.bio,
         profileImageUrl: user.profile_image_url,
         backgroundImageUrl: user.background_image_url
                 })
        }
    }, []);
    // const fetchUserInfo = () => {
    //     getCurrentUser().then(data => setUserBio({
    //         ...data,
    //         id: data?.user.id,
    //         bio: data?.bio,
    //         profileImageUrl: data?.profile_image_url
    //     }))
    // }

    useEffect(() => {
        console.log('bio', userBio)
    }, [user, userBio]);

    const handleClick = (event) => {
        event.preventDefault()
        updateReaderBio(user.user.id, userBio).then(() => close())
    }

   

    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Bio</Form.Label>
                <Form.Control name='bio' as="textarea" 
                value={userBio.bio}
                rows={3}
                placeholder="Enter Bio" 
                onChange={(event) => handleOnChange(event)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Profile Image</Form.Label>
                <Form.Control name='profileImageUrl' type="url" 
                value={userBio.profileImageUrl}
                placeholder="profile image url" 
                onChange={(event) => handleOnChange(event)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Background Image</Form.Label>
                <Form.Control name='backgroundImageUrl' type="url" 
                value={userBio.backgroundImageUrl}
                placeholder="profile image url" 
                onChange={(event) => handleOnChange(event)}
                />
            </Form.Group>
            <Button variant="primary" onClick={(event) => {handleClick(event)}}>
                Submit
            </Button>
        </Form>
    )
}

