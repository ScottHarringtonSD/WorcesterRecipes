import RecipeCard from "../components/RecipeCard";
import Recipe from "../index/Recipe";

interface RecipeSearchPageProps {
  recipes: Recipe[];
}

const RecipeSearchPage = ({ recipes }: RecipeSearchPageProps) => {
  return (
    <>
      <h1 className="text-7xl italic text-center">Search Recipes</h1>
      <p className="text-3xl text-center">
        Search through a selection of salivating suppers and sumptuous snacks,
        guaranteed to satiate you and silence any sufferings of your stomach.{" "}
      </p>
      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </>
  );
};

export default RecipeSearchPage;
