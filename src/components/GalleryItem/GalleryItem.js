import { Link, Outlet, useNavigate } from 'react-router-dom';
import { BsArrowLeftSquare } from 'react-icons/bs';
import PropTypes from 'prop-types';

import styles from './GalleryItem.module.css';

export default function GalleryItem({ movie }) {
  let navigate = useNavigate();
  return (
    <>
      <button
        type="button"
        className={styles.Button}
        onClick={() => {
          navigate(-1);
        }}
      >
        <BsArrowLeftSquare style={{ width: '2em', height: '2em' }} />
      </button>
      {movie && (
        <div className={styles.Container}>
          <img
            className={styles.Image}
            src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
            alt={movie.title}
          />
          <div className={styles.Card}>
            <h1 className={styles.Title}>{movie.title}</h1>
            <p className={styles.Description}>
              User Score: {movie.vote_average * 10}%
            </p>
            <h2 className={styles.Subitle}>Overview</h2>
            <p className={styles.Overview}>{movie.overview}</p>
            <h3>Genres</h3>
            <p className={styles.Description}>
              {movie.genres.map(genre => genre.name).join(' ')}
            </p>
          </div>
        </div>
      )}
      <hr />
      <h4>Additional information</h4>
      <Link to="cast" className={styles.Link}>
        Cast
      </Link>
      <Link to="reviews" className={styles.Link}>
        Reviews
      </Link>
      <hr />
      <Outlet />
    </>
  );
}

GalleryItem.propTypes = {
  movie: PropTypes.object,
};
