import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images, onClick }) => {
  return (
    <div>
      <ul className={css.gallery}>
        {images.map(image => (
          <li key={image.id} onClick={() => onClick(image)} className={css.item}>
            <ImageCard image={image} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
