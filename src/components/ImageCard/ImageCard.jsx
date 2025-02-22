import css from './ImageCard.module.css';

const ImageCard = ({ image }) => {
  return (
    <div className={css.card}>
      <img src={image.urls.small} alt={image.description} />
    </div>
  );
};

export default ImageCard;
