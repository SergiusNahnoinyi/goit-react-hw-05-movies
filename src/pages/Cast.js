import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import moviesApi from '../services/api-service';
// import { logo } from '../../public/logo192.png';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    moviesApi.getCastById(movieId).then(setCast);
  }, [movieId]);

  return (
    <ul>
      {cast &&
        cast.map(element => (
          <li key={element.id}>
            <img
              src={
                element.profile_path
                  ? `https://image.tmdb.org/t/p/w200` + element.profile_path
                  : 'https://raw.githubusercontent.com/SergiusNahnoinyi/goit-react-hw-05-movies/main/public/logo192.png'
              }
              alt={element.name}
            />
            <p>{element.name}</p>
          </li>
        ))}
    </ul>
  );
}
