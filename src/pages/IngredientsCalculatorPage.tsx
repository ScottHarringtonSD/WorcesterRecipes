import { useNavigate } from "react-router-dom";
import { RecipeFiles } from "../data/RecipeFiles";
import RecipeImageCarousel from "../components/RecipeImageCarousel";
import { useState } from "react";
import Recipe from "../index/Recipe";

const IngredientsCalculator = () => {
  const [selectedRecipies, setSelectedRecipes] = useState([]);
  return (
    <div className="text-center">
      <h1 className="sm:text-8xl text-5xl text-center p-3">
        Ingredients Calculator
      </h1>
    </div>
  );
};

export default IngredientsCalculator;
