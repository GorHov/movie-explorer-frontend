import { create } from 'zustand';
import { movieActions } from './movieActions';

export const useMovieStore = create((set) => ({
  movies: [],
  loading: false,
  error: null,
  selectedMovie: null,
  reviews: [],
  ...movieActions(set),
}));
