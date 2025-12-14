import RecipeCard from "../components/RecipeCard";
import Recipe from "../index/Recipe";

interface RecipeSearchPageProps {
  recipes: Recipe[];
}

const RecipeSearchPage = ({ recipes }: RecipeSearchPageProps) => {
  return (
    <>
      <h1 className="sm:text-8xl text-5xl text-center p-3">Search Recipes</h1>
      <p className="sm:text-3xl text-xl text-center">
        Search through a selection of salivating suppers and sumptuous snacks,
        guaranteed to satiate you and silence any sufferings of your stomach.{" "}
      </p>
      <h2 className="sm:text-5xl text-3xl p-6">Meals</h2>
      <hr className="border-0 bg-red-800" style={{ height: "2px" }} />
      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
        {recipes
          .filter((rec) => rec.type === "meal")
          .map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
      </div>
      <h2 className="text-5xl p-6">Drinks</h2>
      <hr className="border-0 bg-red-800" style={{ height: "2px" }} />
      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
        {recipes
          .filter((rec) => rec.type === "drink")
          .map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
      </div>
    </>
  );
};

export default RecipeSearchPage;
