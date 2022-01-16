import React, { useContext } from "react"
import { UserContext } from "./UserManager"

import styled from 'styled-components';

import './Details.css'
import { Image, Card, ListGroup, ListGroupItem, CardGroup } from "react-bootstrap"

const ScrollableContent = styled.div`
position: absolute;
width: 86%;
height: calc(100% - 140px);
overflow-y: auto;
margin: 10px 30px 30px 30px;
padding: 0px 25px 38px 0px;
/* scroll bar width */
&::-webkit-scrollbar {
width: 10px;
}`


export const UserBookDetails = () => {
    const { userBook } = useContext(UserContext)

    return (
        <>
        <ScrollableContent>

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
        </ScrollableContent>
        </>
    )
}
