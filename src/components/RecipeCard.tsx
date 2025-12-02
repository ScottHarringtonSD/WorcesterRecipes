import { useNavigate } from "react-router-dom";
import Recipe from "../index/Recipe";

interface RecipeCardProps {
  recipe: Recipe;
}
const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/Recipes/${recipe.id}`);
  };
  return (
    <div className="card-height flex flex-col" onClick={handleClick}>
      <div className="mx-auto card max-w-xs border hover:shadow-lg hover:bg-red-700 hover:cursor-pointer min-w-80 border-black rounded-lg bg-red-800 p-2 flex flex-col h-full">
        <img
          src={recipe.pictureLink}
          alt={recipe.title}
          className="rounded-t-lg h-64 w-full object-cover"
        />
        <h1 className="mb-1 text-xl tracking-tight pl-1 pt-1 w-full text-white">
          {recipe.title}
        </h1>
        <div className="text-gray-300 pl-1 w-full">By</div>
        <div className="text-gray-300 pl-1 w-full">{recipe.chef}</div>
        <div className="text-white pt-1 pl-1 flex-grow">
          {recipe.preamble && recipe.preamble.length > 80
            ? recipe.preamble.substring(0, 100) + "..."
            : recipe.preamble}
        </div>
      </div>
    </div>
  );
};
export default RecipeCard;
