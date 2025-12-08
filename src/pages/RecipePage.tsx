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
      <p className="text-xl text-center">{recipe.servingSize}</p>
      <hr className="border-0 bg-red-800 mt-3" style={{ height: "2px" }} />
      <div className="flex flex-col sm:flex-row items-start p-4">
        <img
          src={recipe.pictureLink}
          alt={recipe.title}
          className="rounded-lg object-cover mr-4 sm:w-1/3 w-full h-auto"
        />

        <div className="flex-1">
          <p className="text-xl">{recipe.preamble}</p>
        </div>
      </div>
      <hr className="border-0 bg-red-800 mt-3" style={{ height: "2px" }} />
      <h2 className="p-3 text-4xl italic">Ingredients</h2>
      <ul className="list-none pl-5">
        {recipe.ingredients.map((ingredient, index) => (
          <li
            key={index}
            className="before:content-['–'] before:mr-2 before:text-red-800 before:text-xl"
          >
            {ingredient}
          </li>
        ))}
      </ul>
      <hr className="border-0 bg-red-800 mt-3" style={{ height: "2px" }} />
      <h2 className="p-3 text-4xl italic">Instructions</h2>
      <ul className="list-none pl-5">
        {recipe.instructions.map((instruction, index) => (
          <li
            key={index}
            className="before:content-['–'] before:mr-2 before:text-red-800 before:text-xl"
          >
            {instruction}
          </li>
        ))}
      </ul>

      {recipe.tips && (
        <div className="pb-3">
          <hr className="border-0 bg-red-800 mt-3" style={{ height: "2px" }} />
          <h2 className="p-3 text-4xl italic">Tips</h2>
          <ul>
            {recipe.tips.map((tip, index) => (
              <li
                key={index}
                className="before:content-['–'] before:mr-2 before:text-red-800 before:text-xl"
              >
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}

      {recipe.reviews && (
        <div className="pb-3">
          <hr className="border-0 bg-red-800 mt-3" style={{ height: "2px" }} />
          <h2 className="p-3 text-4xl italic">Reviews</h2>
          {recipe.reviews.map((review, index) => (
            <RecipeReview key={index} review={review} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipePage;
