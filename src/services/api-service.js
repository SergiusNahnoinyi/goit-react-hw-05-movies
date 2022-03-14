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

export default { getTrendingMovies };
