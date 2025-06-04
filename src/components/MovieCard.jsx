import { Link } from "react-router-dom";
import { useMovieStore } from "../store/movieStore";

const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

const MovieCard = ({ movie }) => {
  const setSelectedMovie = useMovieStore((state) => state.setSelectedMovie);

  const handleClick = () => {
    setSelectedMovie(movie);
  };

  return (
    <Link to={`/movie/${movie.id}`} className="block" onClick={handleClick}>
      <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 truncate">
            {movie.title}
          </h2>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-yellow-500 font-medium">
              ⭐ {movie.vote_average.toFixed(1)} / 10 ({movie.vote_count} votes)
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
