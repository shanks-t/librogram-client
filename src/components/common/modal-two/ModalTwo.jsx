import React from 'react';

import Modal from '../modal/Modal';

const ModalTwo = ({ closeFn = () => null, open = false }) => {
  return (
    <Modal open={open}>
      <div className="modal--mask">
        <div className="modal-window">
          <header className="modal--header">
            <h1>Modal Two</h1>
          </header>
          <div className="modal--body">
            <p>Modal Two content will be rendered here.</p>
          </div>
          <footer className="modal--footer">
            <button type="button" onClick={closeFn}>
              Close
            </button>
          </footer>
        </div>
      </div>
    </Modal>
  );
};

export default ModalTwo;
