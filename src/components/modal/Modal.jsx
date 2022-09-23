import './modal.css';
import React from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;

  return createPortal(
    <div className='modal-background'>
      <div className='modal-container'>
        <div className='modal-content'>
          <button className='modal-close-btn' onClick={onClose}>
            X
          </button>
          <div className='content-container'>{children}</div>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export default Modal;
