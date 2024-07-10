import { useState } from 'react';
import Modal from '../Modal/Modal';
import './style.css';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="header">
      <h3>Header</h3>
      <button className="modal-btn" onClick={() => setIsModalOpen(true)}>
        Open
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
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
