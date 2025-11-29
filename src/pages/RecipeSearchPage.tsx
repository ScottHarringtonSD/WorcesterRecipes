import RecipeCard from "../components/RecipeCard";
import Recipe from "../index/Recipe";

interface RecipeSearchPageProps {
  recipes: Recipe[];
}

const RecipeSearchPage = ({ recipes }: RecipeSearchPageProps) => {
  return (
    <>
      <h1 className="text-7xl italic">Search Recipes</h1>
      <div className="mx-auto flex place-content-center gap-2 grid-cols-3 p-2">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </>
  );
};

export default RecipeSearchPage;
