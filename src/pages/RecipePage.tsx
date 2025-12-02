import { useParams } from "react-router-dom";
import { RecipeFiles } from "../data/RecipeFiles";
import RecipeReview from "../components/RecipeReview";

const RecipePage = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = RecipeFiles.find((rec) => rec.id === parseInt(id!));

  if (!recipe) {
    return <h2>Recipe not found</h2>;
  }

  return (
    <div>
      <h1 className="text-8xl text-center pt-5 px-5">{recipe.title}</h1>
      <h2 className="text-2xl p-2 w-full">By</h2>
      <h2 className="text-2xl p-2 w-full">{recipe.chef}</h2>
      <p className="text-xl text-center p-2">{recipe.preamble}</p>
      <p className="text-xl text-center p-2">{recipe.servingSize}</p>
      <h2 className="p-3 text-4xl italic">Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li>{ingredient}</li>
        ))}
      </ul>

      <h2 className="p-3 text-4xl italic">Instructions</h2>
      <ul>
        {recipe.instructions.map((instruction, index) => (
          <li>{instruction}</li>
        ))}
      </ul>
      {recipe.tips && (
        <>
          <h2 className="p-3 text-4xl italic">Tips</h2>
          <ul>
            {recipe.tips.map((tip, index) => (
              <li>{tip}</li>
            ))}
          </ul>
        </>
      )}
      {recipe.reviews && (
        <>
          <h2 className="p-3 text-4xl italic">Reviews</h2>
          {recipe.reviews.map((tip, index) => (
            <div>fun</div>
          ))}
        </>
      )}
      {recipe.reviews && (
        <>
          <h2 className="p-3 text-4xl italic">Reviews</h2>
          {recipe.reviews.map((review, index) => (
            <RecipeReview review={review} />
          ))}
        </>
      )}
    </div>
  );
};

export default RecipePage;
