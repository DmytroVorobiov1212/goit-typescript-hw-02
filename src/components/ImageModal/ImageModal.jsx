import Modal from "react-modal";
import { useEffect } from "react";
import s from "./ImageModal.module.css";
import { AiTwotoneCloseCircle } from "react-icons/ai";

Modal.setAppElement("#root");

const ImageModal = ({ image, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      className={s.modal}
      overlayClassName={s.backdrop}
      contentLabel="Image Modal"
    >
      {image && <img src={image.urls.regular} alt={image.alt_description} />}
      <button className={s.close} onClick={onClose}>
        <AiTwotoneCloseCircle className={s.icon} />
      </button>
    </Modal>
  );
};

export default ImageModal;
