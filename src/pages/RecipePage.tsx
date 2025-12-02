import { useParams } from "react-router-dom";
import { RecipeFiles } from "../data/RecipeFiles";

const RecipePage = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = RecipeFiles.find((rec) => rec.id === parseInt(id!));

  if (!recipe) {
    return <h2>Recipe not found</h2>;
  }

  return (
    <div>
      <h2 className="text-7xl italic">{recipe.title}</h2>
      <p>{recipe.preamble}</p>
      <h2 className="text-4xl italic">{recipe.instructions}</h2>
    </div>
  );
};

export default RecipePage;
