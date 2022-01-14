import React from 'react';

import ModalOne from './modals/ModalOne';
import ModalTwo from './modals/ModalTwo';
import ModalThree from './modals/ModalThree';



const ModalManager = ({ closeFn, modal = '' }) => {
  return (
    <>
      <ModalOne closeFn={closeFn} open={modal === 'modal-one'} />
      <ModalTwo closeFn={closeFn} open={modal === 'modal-two'} />
      <ModalThree closeFn={closeFn} open={modal === 'modal-three'} />
    </>
  );
};

export default ModalManager;