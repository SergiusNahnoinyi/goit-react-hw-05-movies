import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import moviesApi from '../services/api-service';

import styles from './Cast.module.css';

export default function Cast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    moviesApi.getCastById(movieId).then(setCast);
  }, [movieId]);

  return (
    <ul className={styles.List}>
      {cast &&
        cast.map(element => (
          <li key={element.id} className={styles.Item}>
            <img
              className={styles.Image}
              src={
                element.profile_path
                  ? `https://image.tmdb.org/t/p/w500` + element.profile_path
                  : 'https://raw.githubusercontent.com/SergiusNahnoinyi/goit-react-hw-05-movies/main/public/logo512.png'
              }
              alt={element.name}
            />
            <h2>{element.name}</h2>
          </li>
        ))}
    </ul>
  );
}
