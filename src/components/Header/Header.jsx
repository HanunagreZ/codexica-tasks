import React, { useState } from "react";
import "./style.css";
import Modal from "../Modal/Modal";

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <header className="header">
      <h3>Header</h3>
      <button className="modal-btn" onClick={() => setModalIsOpen(true)}>
        Open
      </button>
      <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <h2>Modal info</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          adipisci, consequuntur iure deserunt animi magni molestias? Corporis,
          accusantium. Quibusdam eos commodi cum nostrum ab consequuntur!
        </p>
      </Modal>
    </header>
  );
};

export default Header;
