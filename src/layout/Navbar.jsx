import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/react.svg';
import Container from './Container';
import { useMovieStore } from '../store/movieStore';
import { useDebounce } from '../hooks/useDebounce';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedTerm = useDebounce(searchTerm, 1000);

  const searchMovies = useMovieStore((state) => state.searchMovies);
  const fetchMovies = useMovieStore((state) => state.fetchMovies);

  useEffect(() => {
    if (debouncedTerm) {
      searchMovies(debouncedTerm);
    } else {
      fetchMovies();
    }
  }, [debouncedTerm, searchMovies, fetchMovies]);

  return (
    <div className="bg-gray-100 border-b border-gray-300 py-4">
      <Container>
        <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10" />
          </Link>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
