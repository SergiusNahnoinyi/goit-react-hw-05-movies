import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import moviesApi from '../services/api-service';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    moviesApi.getReviewsById(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have reviews for this movie</p>
      )}
    </>
  );
}
