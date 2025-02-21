import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://api.unsplash.com/';
const API_KEY = 'vZIIBdqZ9AvlKhDqy8a8kgT2g957o36q6s8rP0Q1bMg';

export const fetchImages = async ({
  query,
  page,
  setImages,
  setTotalPages,
  setLoading,
  setError,
}) => {
  setLoading(true);
  setError(null);
  try {
    const response = await axios.get('/search/photos', {
      params: {
        client_id: API_KEY,
        query,
        page,
      },
    });

    setImages(prevImages => [...prevImages, ...response.data.results]);
    setTotalPages(response.data.total_pages);
  } catch (err) {
    console.error(err);
    setError('Something went wrong! Please try again.');
    toast.error('Failed to fetch images!');
  } finally {
    setLoading(false);
  }
};
