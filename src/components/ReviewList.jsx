const ReviewList = ({ reviews }) => (
  <div>
    <h3 className="text-2xl font-semibold mb-3">Reviews</h3>
    {reviews.length === 0 ? (
      <p className="text-gray-500">No reviews available.</p>
    ) : (
      <div className="space-y-4">
        {[...reviews].reverse().map((review, index) => (
          <div key={index} className="border border-gray-200 p-4 rounded-md">
            <p className="text-gray-800">{review.review}</p>
            {review.user && (
              <p className="text-sm text-gray-500 mt-2">— {review.user}</p>
            )}
          </div>
        ))}
      </div>
    )}
  </div>
);

export default ReviewList;
