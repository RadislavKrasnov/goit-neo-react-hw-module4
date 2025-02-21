import Modal from 'react-modal';

Modal.setAppElement('#root');

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal isOpen={!!image} onRequestClose={onClose}>
      <img src={image?.urls?.regular} alt={image?.description} />
      <p>{image?.description || 'No description'}</p>
      <button onClick={onClose}></button>
    </Modal>
  );
};

export default ImageModal;
