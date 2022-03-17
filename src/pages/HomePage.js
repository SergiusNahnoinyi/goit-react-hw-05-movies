import { useState, useEffect } from 'react';

import MoviesGallery from '../components/MoviesGallery/MoviesGallery';
import moviesApi from '../services/api-service';

export default function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    moviesApi.getTrendingMovies().then(setMovies);
  }, []);

  return (
    <section>
      <h1 style={{ marginBottom: '16px', textAlign: 'center' }}>
        Trending today
      </h1>
      <MoviesGallery movies={movies} />
    </section>
  );
}
