const ReviewForm = ({ userName, reviewText, setUserName, setReviewText, handleSubmit }) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold mb-2">Leave a Review</h3>
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Your name (optional)"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded"
      />
      <textarea
        placeholder="Your review"
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded h-24"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
      >
        Submit Review
      </button>
    </form>
  </div>
);

export default ReviewForm;
