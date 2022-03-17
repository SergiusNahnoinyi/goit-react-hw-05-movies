import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useNavigate } from 'react-router-dom';

import moviesApi from '../services/api-service';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    moviesApi.getMovieById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go back
      </button>
      {movie && (
        <div style={{ display: 'flex', marginTop: '16px' }}>
          <img
            src={`https://image.tmdb.org/t/p/w300` + movie.poster_path}
            alt={movie.title}
          />
          <div style={{ marginLeft: '20px' }}>
            <h1>{movie.title}</h1>
            <p>User Score: {movie.vote_average * 10}%</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
          </div>
        </div>
      )}
      <hr />
      <h4>Additional information</h4>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </>
  );
}
