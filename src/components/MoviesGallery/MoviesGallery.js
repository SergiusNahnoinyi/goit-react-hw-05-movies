import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './MoviesGallery.module.css';

export default function MoviesGallery({ movies }) {
  return (
    <ul className={styles.Gallery}>
      {movies &&
        movies.map(movie => (
          <li key={movie.id} className={styles.Item}>
            <Link to={`/movies/${movie.id}`} className={styles.Link}>
              <img
                className={styles.Image}
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500` + movie.poster_path
                    : 'https://raw.githubusercontent.com/SergiusNahnoinyi/goit-react-hw-05-movies/main/public/logo512.png'
                }
                alt={movie.title}
              />
              <h3 className={styles.Title}>{movie.title}</h3>
              <p className={styles.Subtitle}>
                {movie.release_date ? movie.release_date : 'Unknown'}
              </p>
            </Link>
          </li>
        ))}
    </ul>
  );
}

MoviesGallery.propTypes = {
  movies: PropTypes.array,
};
