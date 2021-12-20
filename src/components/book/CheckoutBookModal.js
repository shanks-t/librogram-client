import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const CheckoutBookModal = ({ isShowing, hide, title, author, book, addBook }) => {
return (
        <Modal
        hide={hide}
        >
        <Modal.Dialog className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal">
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                {author.length === 1 ? 
                <p>
                    Would you like to add {title} by {author} to your library? 
                </p>
                : 
                <p>
                Would you like to add {title} by {author[0]} and {author[1]} to your library? 
                </p>
                }
                </Modal.Body>
                <Button variant='primary'onClick={() => addBook(book)}>yes</Button>
                    <Button variant='secondary' onClick={hide}> No </Button>
            </div>
        </Modal.Dialog>
        </Modal>
    )
}


export default CheckoutBookModal;