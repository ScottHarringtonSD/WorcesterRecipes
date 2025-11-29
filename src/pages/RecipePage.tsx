import Recipe from "../index/Recipe";

interface RecipePageProps {
  recipe: Recipe;
}

const RecipePage = ({ recipe }: RecipePageProps) => {
  return (
    <div>
      <h2 className="text-7xl italic">{recipe.title}</h2>
      <p>{recipe.preamble}</p>
      <h2 className="text-4xl italic">{recipe.instructions}</h2>
    </div>
  );
};

export default RecipePage;
