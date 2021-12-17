import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide, title, author, book, addBook }) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <div className="modal-overlay" />
        <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal">
                <div className="modal-header">
                </div>
                {author.length === 1 ? 
                <p>
                    Would you like to add {title} by {author} to your library? 
                </p>
                : 
                <p>
                Would you like to add {title} by {author[0]} and {author[1]} to your library? 
                </p>
                }
                <button onClick={() => addBook(book)}>yes</button>
                    <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                        No
                    </button>
            </div>
        </div>
    </React.Fragment>, document.body
) : null;

export default Modal;