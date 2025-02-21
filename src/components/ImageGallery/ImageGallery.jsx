import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul>
      {images.map(image => (
        <li key={image.id} onClick={() => onClick(image)}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
