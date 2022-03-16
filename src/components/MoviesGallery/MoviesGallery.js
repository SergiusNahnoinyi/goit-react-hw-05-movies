export default function MoviesGallery({ movies }) {
  return (
    <ul>
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w200` + movie.poster_path
                  : 'https://raw.githubusercontent.com/SergiusNahnoinyi/goit-react-hw-05-movies/main/public/logo192.png'
              }
              alt={movie.title}
            />
            <p>{movie.original_title}</p>
          </li>
        ))}
    </ul>
  );
}
