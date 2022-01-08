import React, { useEffect, useContext } from "react"
import { UserContext } from "./UserManager"

import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
//import "./UserProfile.css"


export const UserBio = (props) => {
    const { user, getCurrentUser } = useContext(UserContext)

    useEffect(() => {
        getCurrentUser()
    }, []);

    useEffect(() => {
        console.log('user', user)
    }, [user]);
    return (
        <Card style={{ width: 'rem' }}>
            <Card.Img variant="top" src={user?.profile_image_url} />
            <Card.Body>
                <Card.Title>{user?.user?.username}</Card.Title>
                <Card.Text>
                    {user.bio}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>total books: {user.current_books}</ListGroupItem>
                <ListGroupItem>total reading goals: {user.goals}</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
        </Card>
        // <>

        //     <article className="user-bio">
        //         <img className='profile-img' src={user.profile_image_url} /><h3>{user?.user?.username}</h3>
        //         <p>{user?.user?.first_name} {user?.user?.last_name}</p>
        //         <p>{user?.bio}</p>
        //     </article>
        // </>
    )
}