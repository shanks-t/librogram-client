import React, { useEffect, useState } from "react"
import { useCurrentUser } from "./UserContext"

import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
//import "./UserProfile.css"


export const UserBio = (props) => {
    const user = useCurrentUser()

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
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
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