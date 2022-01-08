import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory, Link } from "react-router-dom";
import { SearchResults } from "../book/SearchResults";

import { Navbar, Nav, Form, FormControl, Button, Container, NavDropdown } from "react-bootstrap";

import { GiBlackBook } from "react-icons/gi";

import './NavBar.css'

export const NavWithSearch = () => {
    const history = useHistory()
    const [books, setBooks] = useState({});
    const [search, setSearch] = useState('');
    const [API_KEY, set_API_KEY] = useState(`${process.env.REACT_APP_API}`)

    const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}&maxResults=30`

    const onInputChange = e => {
        setSearch(e.target.value);
    }

    // handleSearchSubmit = () => {
    //     if (searchText) {
    //         let text = searchText;
    //         setState({ searchText: "" })
    //         history.push({
    //             pathname: "/results",
    //             state: { searchText: text }
    //         });
    //     } else {
    //         alert("Please enter some search text!");
    //     }
    // };

    const getBooks = async () => {
        try {
            localStorage.removeItem('books')
            const response = await fetch(url);
            const data = await response.json()
            setBooks(data);
            history.push('/results')
        } catch (error) {
            console.error(error);
        }
    }

    const handleSearchKeyUp = (event) => {
        event.preventDefault();
        if (event.key === 'Enter' && event.keyCode === 13) {
            getBooks();
            setSearch('')
        }
    }

    const handleFormSubmit = e => e.preventDefault();

    useEffect(() => {
        const json = JSON.stringify(books)
        localStorage.setItem('books', json)
        console.log('books', books)
    }, [books]);



    return (
        <>
            <Navbar bg="light" expand="lg" sticky='top'>
                <Container fluid>
                    <Navbar.Brand href="#"><GiBlackBook/> Librogram</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                            <Nav.Link as={Link} to="/goals">Goals</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item data-modal="modal-two">Edit Bio</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            
                        </Nav>
                        <Form className="d-flex" onSubmit={handleFormSubmit}>
                            <FormControl
                                placeholder='Search for Books'
                                defaultValue=""
                                onChange={onInputChange}
                                value={search}
                                onKeyUp={handleSearchKeyUp}
                                type="text"
                                className="mr-sm-2"
                            />
                            <Button onClick={getBooks} variant="outline-info">
                                Search
                            </Button>
                        </Form>
                        { (localStorage.getItem("lg_user_token") !== null) ?
                            <Nav.Link as={Link} onClick={() => {
                                localStorage.removeItem("lg_user_token")
                                history.push({ pathname: "/" })
                            }}>
                                Logout
                            </Nav.Link>
                            :
                            <>
                        <div className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </div>
                        <div className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </div>
                    </>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Switch>
                <Route exact path="/results" component={SearchResults} />
            </Switch> 
            {/* <Navbar bg="dark" variant="dark">
                        <div>
                        <Link to='/profile'>profile</Link>
                        </div>
                        <div>
                        <Link to='/goals'>goals</Link>
                        </div>
                    <div>

                    <Form inline onSubmit={handleFormSubmit}>
                        <FormControl
                            placeholder='Search for Books'
                            defaultValue=""
                            onChange={onInputChange}
                            value={search}
                            onKeyUp={handleSearchKeyUp}
                            type="text"
                            className="mr-sm-2"
                        />
                        <Button onClick={getBooks} variant="outline-info">
                            Search
                        </Button>
                    </Form>
                    </div>
                </Navbar>
                <Switch>
     
                    <Route exact path="/results" component={SearchResults} />
                </Switch> */}
        </>
    );
}

export default (NavWithSearch);