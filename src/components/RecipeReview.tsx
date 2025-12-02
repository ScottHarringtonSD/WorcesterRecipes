import Review from "../index/Review";

interface RecipeReviewProps {
  review: Review;
}

const RecipeReview = ({ review }: RecipeReviewProps) => {
  return (
    <div className="border border-black">
      <p>{review.commenter}</p>
      <p>{review.text}</p>
      <p>{review.rating}</p>
    </div>
  );
};
export default RecipeReview;
