import React, { useEffect } from "react";
import "./style.css";
import iconClose from "./icon-close.png";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => onClose(), 3000);
    }
  });

  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-wrapper">
            <div className="modal-content">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
