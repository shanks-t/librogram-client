import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from 'react-router-dom'
import { getBook, getCurrentUser } from "./UserManager"
import { CommentForm } from "../comment/CommentForm"
import { UserContext } from "./UserManager"

import './Details.css'
import { Image, Card, ListGroup, ListGroupItem, CardGroup, ButtonGroup, Button } from "react-bootstrap"


export const UserBookDetails = () => {
    const [showCommentForm, setShowCommentForm] = useState(false)
    const [showEditCommentForm, setShowEditCommentForm] = useState(false)

    //const { bookId } = useParams()
    const { user, getUserBook, userBook } = useContext(UserContext)

    // const fetchBookInfo = () => {
    //     getBook(bookId).then(data => setBook(data))
    // }

    const handleCreateToggle = (id) => {
        if (showCommentForm) {
            setShowCommentForm(false)
        } else {
            setShowCommentForm(true)
        }
    }
    const handleEditToggle = (id) => {
        if (showEditCommentForm) {
            setShowEditCommentForm(false)
        } else {
            setShowEditCommentForm(true)
        }
    }


    useEffect(() => {
        console.log('userbookdeets', userBook)
    }, [userBook]);


    return (
        <>
        
            <div className="book-details">
                <Image variant="top" src={userBook.book?.image_path} style={{ height: '9rem', zIndex: '1' }} />
                <CardGroup>
                    <Card style={{ width: '100%', height: 'auto', marginTop: '5px' }}>
                        <Card.Body>
                            <Card.Title>{userBook.book?.title}</Card.Title>
                            <Card.Text>{userBook.book?.subtitle}</Card.Text>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>
                                    Author(s): {userBook.book?.authors.map(a => (<p>{a.name}</p>))}
                                </ListGroupItem>
                                <ListGroupItem>Publisher: {userBook.book?.publisher}</ListGroupItem>
                                <ListGroupItem>Publish Date: {userBook.book?.date_published}</ListGroupItem>
                                <ListGroupItem>Pages: {userBook.book?.page_count}</ListGroupItem>
                                <ListGroupItem></ListGroupItem>
                            </ListGroup>
                            <Card.Text >
                                {userBook.book?.description}
                            </Card.Text>
                                </Card.Body>
                            <Card.Body>
                            <ListGroup>
                                <Card.Title>Tags</Card.Title>
                                    {
                                        userBook.book?.tags?.map(tag => (
                                            <ListGroupItem>{tag.label}</ListGroupItem>
                                        ))
                                    }
                            </ListGroup>

                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        </>
    )
}
