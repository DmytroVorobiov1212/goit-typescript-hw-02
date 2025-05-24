// import s from "./ImageCard.module.css";

// function ImageCard({ image, onImageClick }) {
//   return (
//     <div className={s.card} onClick={() => onImageClick(image)}>
//       <img
//         src={image.urls.small}
//         alt={image.alt_description}
//         className={s.image}
//       />
//     </div>
//   );
// }

// export default ImageCard;


import s from "./ImageCard.module.css";
import { UnsplashImage } from "../../services/Api";

interface ImageCardProps {
  image: UnsplashImage;
  onImageClick: (image: UnsplashImage) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onImageClick }) => {
  return (
    <div className={s.card} onClick={() => onImageClick(image)}>
      <img
        src={image.urls.small}
        alt={image.alt_description || "Image"}
        className={s.image}
      />
    </div>
  );
};

export default ImageCard;
