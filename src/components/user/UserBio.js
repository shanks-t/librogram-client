import React, { useEffect, useContext } from "react"
import { UserContext } from "./UserManager"

import './UserBio.css'



export const UserBio = (props) => {
    const { user, getCurrentUser } = useContext(UserContext)

    useEffect(() => {
        getCurrentUser()
    }, []);

    const styleHeader = {
        backgroundImage: `url('${user?.background_image_url}')`
    }
    const styleImage = {
        backgroundImage: `url('${user?.profile_image_url}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        cursor: 'pointer',
        zIndex: '30',
        //-webkit - filter: grayscale(100 %);
        filter: 'grayscale(100 %)',
        //-webkit - transition: all 0.2s ease -in -out;
        transition: 'all 0.2s ease -in -out'
};
return (


    <div class="wrapper">
        <div class="card">
            <div class="card__header" style={styleHeader}></div>
            <div class="card__image card__image-geoff" style={styleImage}></div>
            <div class="card__info">
                <div class="details">
                    <span class="details__text-header">@{user?.user?.username}</span>
                    <span class="details__text-subheader">{user?.user?.first_name} {user?.user?.last_name}</span><br></br>
                    <span class="details__text-subheader">{user.bio}</span>
                </div>
                <div class="card__info__section-3">
                    <div class="details-bottom details-bottom-1">
                        <span class="details__number">{user.current_books}</span>
                        <span class="details__text">books checked out</span>
                    </div>
                </div>
                <div class="card__info__section-3">
                    <div class="details-bottom details-bottom-2">
                        <span class="details__number">{user.finished_books}</span>
                        <span class="details__text">books read</span>
                    </div>
                </div>
                <div class="card__info__section-3">
                    <div class="details-bottom details-bottom-3">
                        <span class="details__number">{user.goals}</span>
                        <span class="details__text">reading goals</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    // <Card style={{ width: 'rem' }}>
    //     <Card.Img variant="top" src={user?.profile_image_url} />
    //     <Card.Body>
    //         <Card.Title>{user?.user?.username}</Card.Title>
    //         <Card.Text>
    //             {user.bio}
    //         </Card.Text>
    //     </Card.Body>
    //     <ListGroup className="list-group-flush">
    //         <ListGroupItem>total books: {user.current_books}</ListGroupItem>
    //         <ListGroupItem>total reading goals: {user.goals}</ListGroupItem>
    //         <ListGroupItem>active reading goals: {user.active_goals}</ListGroupItem>
    //     </ListGroup>
    // </Card>
    // <>

    //     <article className="user-bio">
    //         <img className='profile-img' src={user.profile_image_url} /><h3>{user?.user?.username}</h3>
    //         <p>{user?.user?.first_name} {user?.user?.last_name}</p>
    //         <p>{user?.bio}</p>
    //     </article>
    // </>
)
}