import React from 'react';

import ModalOne from './modals/ModalOne';
import ModalTwo from './modals/ModalTwo';


const ModalManager = ({ closeFn, modal = '' }) => {
  return (
    <>
      <ModalOne closeFn={closeFn} open={modal === 'modal-one'} />
      <ModalTwo closeFn={closeFn} open={modal === 'modal-two'} />
    </>
  );
};

export default ModalManager;