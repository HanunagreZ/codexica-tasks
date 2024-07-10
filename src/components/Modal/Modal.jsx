import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import './style.css';

const modalRootElement = document.getElementById('modal');

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => onClose(), 3000);
    }
  });

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className="modal">
      <div className="modal-wrapper">
        <div className="modal-content">{children}</div>
      </div>
    </div>,
    modalRootElement
  );
};

export default Modal;
