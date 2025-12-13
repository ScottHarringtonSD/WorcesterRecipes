import { useNavigate } from "react-router-dom";
import { RecipeFiles } from "../data/RecipeFiles";
import RecipeImageCarousel from "../components/RecipeImageCarousel";

const Homepage = () => {
  const navigate = useNavigate();
  const handleSearchOnClick = () => {
    navigate("/recipes");
  };

  const handleHungryClick = () => {
    const id = Math.floor(Math.random() * (RecipeFiles.length - 1)) + 1;
    navigate(`/Recipes/${id}`);
  };
  return (
    <div className="text-center">
      <h1 className="text-8xl italic p-10 pt-20">A Taste Of Worcester</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <span className="p-2 text-center sm:text-right">
          <button
            className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-3xl"
            onClick={handleSearchOnClick}
          >
            Search Recipes
          </button>
        </span>
        <span className="p-2 text-center sm:text-left">
          <button
            className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-3xl hover:animate-bounce"
            onClick={handleHungryClick}
          >
            I'm feeling hungry!
          </button>
        </span>
      </div>
      <RecipeImageCarousel />
    </div>
  );
};

export default Homepage;
