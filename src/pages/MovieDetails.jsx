import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMovieStore } from '../store/movieStore';
import axios from 'axios';
import MoviePoster from '../components/MoviePoster';
import MovieInfo from '../components/MovieInfo';
import ReviewForm from '../components/ReviewForm';
import ReviewList from '../components/ReviewList';
import Spinner from '../components/Spinner';

const MovieDetails = () => {
  const { id } = useParams();
  const fetchMovie = useMovieStore((state) => state.fetchMovie);
  const fetchReviews = useMovieStore((state) => state.fetchReviews);
  const movie = useMovieStore((state) => state.selectedMovie);
  const reviews = useMovieStore((state) => state.reviews);

  const [reviewText, setReviewText] = useState('');
  const [userName, setUserName] = useState('');

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

  useEffect(() => {
    if (id) {
      fetchMovie(id);
      fetchReviews(id);
    }
  }, [id, fetchMovie, fetchReviews]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!reviewText.trim()) return;

    try {
      await axios.post(`${API_BASE_URL}/reviews/add`, {
        movieId: id,
        user: userName || 'Anonymous',
        review: reviewText.trim(),
      });

      setReviewText('');
      setUserName('');
      fetchReviews(id);
    } catch (error) {
      console.error('Error submitting review:', error.message);
    }
  };

 if (!movie) return <Spinner />;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <MoviePoster src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
      <MovieInfo title={movie.title} overview={movie.overview} releaseDate={movie.release_date} />
      <ReviewForm
        userName={userName}
        reviewText={reviewText}
        setUserName={setUserName}
        setReviewText={setReviewText}
        handleSubmit={handleSubmit}
      />
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default MovieDetails;
