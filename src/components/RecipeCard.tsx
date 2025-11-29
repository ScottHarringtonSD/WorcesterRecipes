import Recipe from "../index/Recipe";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <div>
      <div className="items-center justify-center">
        <div className="mx-auto card max-w-sm border min-w-96 border-black rounded-lg shadow-lg bg-red-800 p-3 card-height items-center">
          <div className="h-full w-full justify-center">
            <img
              src={recipe.pictureLink}
              alt={recipe.title}
              className="rounded-t-lg h-1/2 w-full object-contain md:object-cover"
            ></img>
            <h1 className="mb-2 text-2xl tracking-tight pl-2 pt-1 w-full text-white">
              {recipe.title}
            </h1>

            <div className="Opacity text-gray-300 max-h-6 pl-2 w-full">
              Chef: {recipe.chef}
            </div>

            <div className="Opacity text-white max-h-6 pl-2 pt-1 w-full">
              {recipe.preamble && recipe.preamble.length > 80
                ? recipe.preamble?.substring(0, 100) + "..."
                : recipe.preamble}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
