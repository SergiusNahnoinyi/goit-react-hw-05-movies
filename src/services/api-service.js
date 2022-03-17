import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '1aaaa4b4eb79ea073919ef453434f2ea';

async function getTrendingMovies() {
  const url = `trending/movie/day?api_key=${API_KEY}`;
  try {
    const { data } = await axios.get(url);
    return data.results;
  } catch (error) {
    console.error(error);
  }
}

async function getMovieById(movieId) {
  try {
    const { data } = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function getCastById(movieId) {
  try {
    const { data } = await axios.get(
      `movie/${movieId}/credits?api_key=${API_KEY}`,
    );
    return data.cast;
  } catch (error) {
    console.error(error);
  }
}

async function getReviewsById(movieId) {
  try {
    const { data } = await axios.get(
      `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`,
    );
    return data.results;
  } catch (error) {
    console.error(error);
  }
}

async function getMoviesbySearchQuery(movieName) {
  const url = `search/movie?api_key=${API_KEY}&query=${movieName}`;
  try {
    const { data } = await axios.get(url);
    return data.results;
  } catch (error) {
    console.error(error);
  }
}

export default {
  getTrendingMovies,
  getMovieById,
  getCastById,
  getReviewsById,
  getMoviesbySearchQuery,
};
