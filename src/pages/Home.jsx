import React, { useEffect } from 'react';
import { useMovieStore } from '../store/movieStore';
import MovieList from '../components/MovieList';
import Spinner from '../components/Spinner'; // import the spinner

const Home = () => {
  const { movies, loading, error, fetchMovies } = useMovieStore();

  useEffect(() => {
    fetchMovies();
  }, []);

  if (loading) return <Spinner />;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return <MovieList movies={movies} />;
};

export default Home;
