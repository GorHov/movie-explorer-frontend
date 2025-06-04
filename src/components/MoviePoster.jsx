const MoviePoster = ({ src, alt }) => (
  <div className="mb-6">
    <img
      src={src}
      alt={alt}
      className="w-full h-96 object-cover rounded-lg"
    />
  </div>
);

export default MoviePoster;
