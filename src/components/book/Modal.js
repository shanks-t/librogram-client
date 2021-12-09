import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide, title, author, book, addBook }) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <div className="modal-overlay" />
        <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal">
                <div className="modal-header">
                </div>
                <p>
                    Would you like to add {title} by {author} to your library?
                </p>
                <button onClick={() => addBook(book)}>yes</button>
                    <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                        No
                    </button>
            </div>
        </div>
    </React.Fragment>, document.body
) : null;

export default Modal;