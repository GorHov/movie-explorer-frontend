import MovieCard from './MovieCard';
import Container from '../layout/Container';

const MovieList = ({ movies }) => {
  return (
    <Container>
      <h2 className="text-black text-2xl mb-4">Popular Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </Container>
  );
};

export default MovieList;
