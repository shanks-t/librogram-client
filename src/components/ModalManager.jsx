import React from 'react';

import ModalOne from './common/modal-one/ModalOne';
import ModalTwo from './common/modal-two/ModalTwo';
import ModalThree from './common/modal-three/ModalThree';


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
