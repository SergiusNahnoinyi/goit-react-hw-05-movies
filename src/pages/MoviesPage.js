import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

import SearchBar from '../components/Searchbar/Searchbar';
import MoviesGallery from '../components/MoviesGallery/MoviesGallery';
import moviesApi from '../services/api-service';

import 'react-toastify/dist/ReactToastify.css';

export default function MoviesPage() {
  const [movieName, setMovieName] = useState('');
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (!movieName) {
      return;
    }
    moviesApi.getMoviesbySearchQuery(movieName).then(results => {
      if (results.length === 0) {
        toast.error('Ничего не найдено');
        return setMovies(null);
      }
      setMovies(results);
    });
  }, [movieName]);

  const handleFormSubmit = query => {
    setMovieName(query);
  };

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} />
      <ToastContainer />
      <MoviesGallery movies={movies} />
    </>
  );
}
