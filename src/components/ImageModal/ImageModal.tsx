// import Modal from "react-modal";
// import { useEffect } from "react";
// import s from "./ImageModal.module.css";
// import { AiTwotoneCloseCircle } from "react-icons/ai";



// const ImageModal = ({ image, onClose }) => {
//   useEffect(() => {
//     const handleEsc = (e) => {
//       if (e.key === "Escape") onClose();
//     };
//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, [onClose]);

//   return (
//     <Modal
//       isOpen={!!image}
//       onRequestClose={onClose}
//       className={s.modal}
//       overlayClassName={s.backdrop}
//       contentLabel="Image Modal"
//     >
//       {image && <img src={image.urls.regular} alt={image.alt_description} />}
//       <button className={s.close} onClick={onClose}>
//         <AiTwotoneCloseCircle className={s.icon} />
//       </button>
//     </Modal>
//   );
// };

// export default ImageModal;

import Modal from "react-modal";
import { useEffect } from "react";
import s from "./ImageModal.module.css";
import { AiTwotoneCloseCircle } from "react-icons/ai";
import { UnsplashImage } from "../../services/Api";

interface ImageModalProps {
  image: UnsplashImage | null;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
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
      ariaHideApp={false} // ⬅️ додай це
    >
      {image && (
        <img src={image.urls.regular} alt={image.alt_description || "Image"} />
      )}
      <button className={s.close} onClick={onClose}>
        <AiTwotoneCloseCircle className={s.icon} />
      </button>
    </Modal>
  );
};

export default ImageModal;
