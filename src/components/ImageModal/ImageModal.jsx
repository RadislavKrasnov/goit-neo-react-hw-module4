import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      overlayClassName={css.modalOverlay}
      className={css.modalContent}
    >
      <img
        src={image?.urls?.regular}
        alt={image?.description}
        className={css.modalImage}
      />
      <p className={css.description}>
        {image?.description || 'No description'}
      </p>
      <button onClick={onClose}></button>
    </Modal>
  );
};

export default ImageModal;
