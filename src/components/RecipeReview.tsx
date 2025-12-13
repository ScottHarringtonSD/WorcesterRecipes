import Review from "../index/Review";

interface RecipeReviewProps {
  review: Review;
}

const RecipeReview = ({ review }: RecipeReviewProps) => {
  return (
    <div className="border-red-800 border-2 rounded-md">
      <div className="p-3">
        <p className="font-bold">
          {review.commenter} - {review.rating} / 5
        </p>
        <p className="text-xl">"{review.text}"</p>
        <p className="text-red-950 text-xl">
          {review.peopleFoundHelpful} people found this helpful
        </p>
      </div>
    </div>
  );
};
export default RecipeReview;
