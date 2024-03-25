import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

interface IBaseModal {
  isOpen: boolean;
  onRequestClose: () => void
}

const BaseModal = ({ isOpen, onRequestClose }: IBaseModal) => {
  return (
    <Modal isOpen={isOpen}
      style={customStyles}
      onRequestClose={onRequestClose}
    >
      City that you typed is not found
    </Modal>
  )
}

export default BaseModal