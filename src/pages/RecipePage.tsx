import { useParams } from "react-router-dom";
import { RecipeFiles } from "../data/RecipeFiles";
import RecipeReview from "../components/RecipeReview";

const RecipePage = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = RecipeFiles.find((rec) => rec.id === parseInt(id!));

  if (!recipe) {
    return <h2 className="text-4xl p-5">Recipe not found. You are lost.</h2>;
  }

  return (
    <div>
      <h1 className="text-8xl text-center pt-5 px-5">{recipe.title}</h1>
      <h2 className="text-2xl">By</h2>
      <h2 className="text-2xl">{recipe.chef}</h2>
      <p className="text-xl">{recipe.servingSize}</p>

      <div className="flex items-start p-4">
        <img
          src={recipe.pictureLink}
          alt={recipe.title}
          className="rounded-lg object-cover mr-4 w-2/3 h-auto"
        />

        <div className="m-20">
          <p className="text-xl">{recipe.preamble}</p>
        </div>
      </div>

      <h2 className="p-3 text-4xl italic">Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h2 className="p-3 text-4xl italic">Instructions</h2>
      <ul>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ul>

      {recipe.tips && (
        <>
          <h2 className="p-3 text-4xl italic">Tips</h2>
          <ul>
            {recipe.tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </>
      )}

      {recipe.reviews && (
        <>
          <h2 className="p-3 text-4xl italic">Reviews</h2>
          {recipe.reviews.map((review, index) => (
            <RecipeReview key={index} review={review} />
          ))}
        </>
      )}
    </div>
  );
};

export default RecipePage;
