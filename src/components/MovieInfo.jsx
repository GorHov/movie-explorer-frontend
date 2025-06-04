const MovieInfo = ({ title, overview, releaseDate }) => (
  <>
    <h2 className="text-3xl font-semibold mb-4">{title}</h2>
    <p className="text-lg text-gray-700 mb-6">{overview}</p>
    <div className="flex items-center space-x-4 mb-6">
      <div className="text-lg font-medium text-gray-500">
        <span className="text-gray-800">Release Date:</span> {releaseDate}
      </div>
    </div>
  </>
);

export default MovieInfo;
