import React from 'react';
import ReactDOM from 'react-dom';

import { Modal, Button } from 'react-bootstrap'
import './CheckoutModal.css'

const CheckoutModal = ({ isShowing, hide, title, author, addBook, user }) => {
    return (
        
        <Modal show={isShowing} onHide={hide} dialogClassName={'checkout-modal'}>
          <Modal.Header closeButton>
            <Modal.Title>Book Checkout</Modal.Title>
          </Modal.Header>
          <Modal.Body>{user?.user.first_name}, would you like to checkout {title} by {author}?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={hide}>
              No
            </Button>
            <Button variant="primary" onClick={addBook}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
    )
    }

export default CheckoutModal;