const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const movieActions = (set) => ({
  fetchMovies: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch(`${API_BASE_URL}/movies/popular`);
      const data = await res.json();
      set({ movies: data, loading: false });
    } catch (error) {
      set({ error: 'Failed to load movies: ' + error, loading: false });
    }
  },

  searchMovies: async (query) => {
    if (!query) return;
    set({ loading: true, error: null });
    try {
      const res = await fetch(`${API_BASE_URL}/movies/search?query=${query}`);
      const data = await res.json();
      set({ movies: data, loading: false });
    } catch (error) {
      set({ error: 'Failed to search movies: ' + error, loading: false });
    }
  },

  setSelectedMovie: (movie) => set({ selectedMovie: movie }),

  fetchMovie: async (id) => {
    set({ loading: true, error: null });
    try {
      const res = await fetch(`${API_BASE_URL}/movies/${id}`);
      const data = await res.json();
      set({ selectedMovie: data, loading: false });
    } catch (error) {
      set({ error: 'Failed to load movie: ' + error, loading: false });
    }
  },

  fetchReviews: async (movieId) => {
    set({ loading: true, error: null });
    try {
      const res = await fetch(`${API_BASE_URL}/reviews/${movieId}`);
      const data = await res.json();
      set({ reviews: data, loading: false });
    } catch (error) {
      set({ error: 'Failed to load reviews: ' + error, loading: false });
    }
  }
});
