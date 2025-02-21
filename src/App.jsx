import { useEffect } from 'react';
import { useState } from 'react';
import { fetchImages } from './api/unsplashApi';
import { Toaster } from 'react-hot-toast';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import Loader from './components/Loader/Loader';

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;
    fetchImages({
      query,
      page,
      setImages,
      setTotalPages,
      setLoading,
      setError,
    });
  }, [query, page]);

  const handleSearchSubmit = newQuery => {
    if (query === newQuery) {
        return;
    }
    
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  return (
    <div>
      <Toaster position="top-center" />
      <SearchBar onSubmit={handleSearchSubmit} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onClick={setSelectedImage} />
      {loading && <Loader />}
      {images.length > 0 && page < totalPages && !loading && (
        <LoadMoreBtn onClick={() => setPage(prevPage => prevPage + 1)} />
      )}
      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}

export default App;
