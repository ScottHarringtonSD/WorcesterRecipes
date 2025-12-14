import { useParams } from "react-router-dom";
import { RecipeFiles } from "../data/RecipeFiles";
import RecipeReview from "../components/RecipeReview";
import { useState } from "react";
import Lurpak from "../data/images/LurpakAd.png";
import Amazon from "../data/images/AmazonAd.png";

const RecipePage = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = RecipeFiles.find((rec) => rec.id === parseInt(id!));
  const [acceptCookies, setAcceptCookies] = useState(false);

  if (!recipe) {
    return <h2 className="text-4xl p-5">Recipe not found. You are lost.</h2>;
  }

  return (
    <div>
      <h1 className="sm:text-8xl text-5xl text-center pt-5 px-5">
        {recipe.title}
      </h1>
      <h2 className="text-2xl">By</h2>
      <h2 className="text-2xl">{recipe.chef}</h2>
      <p className="text-xl text-center">{recipe.servingSize}</p>

      {recipe.id === 2 &&
        (!acceptCookies ? (
          <div className="border-2 border-red-800 rounded-md">
            <h1 className="text-center text-3xl">Cookies</h1>
            <p className="text-center p-3">
              We use essential cookies to make our site work. With your consent,
              we may also use non-essential cookies to improve user experience
              and analyze website traffic. We are desperate to use and abuse
              your data and so are our partners. Thanks in Advance!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <span className="p-2 text-center sm:text-right">
                <button
                  className="bg-red-200 hover:bg-red-200 text-white font-bold py-2 px-4 rounded text-xl"
                  onClick={() => setAcceptCookies(true)}
                >
                  Reject Cookies :(
                </button>
              </span>
              <span className="p-2 text-center sm:text-left">
                <button
                  className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-xl hover:animate-spin"
                  onClick={() => setAcceptCookies(true)}
                >
                  Accept Cookies
                </button>
              </span>
            </div>
          </div>
        ) : (
          <div className="border-2 border-red-800 rounded-md text-center">
            <div className="p-5">Thank you for accepting cookies ;)</div>
          </div>
        ))}
      <hr className="border-0 bg-red-800 mt-3" style={{ height: "2px" }} />
      <div className="flex flex-col sm:flex-row items-start p-4">
        <img
          src={recipe.pictureLink}
          alt={recipe.title}
          className="rounded-lg object-cover mr-4 sm:w-1/3 w-full h-auto"
        />

        <div className="flex-1">
          <p className="sm:text-2xl text-xl">{recipe.preamble}</p>
        </div>
      </div>
      {recipe.id === 2 && (
        <>
          <hr
            className="border-0 bg-red-800 mt-3 mb-3"
            style={{ height: "2px" }}
          />
          <img
            src={Amazon}
            alt={recipe.title}
            className="rounded-lg object-cover mr-4 w-full h-auto animate-pulse"
          />
        </>
      )}
      <hr className="border-0 bg-red-800 mt-3" style={{ height: "2px" }} />
      <h2 className="p-3 text-4xl italic">Ingredients</h2>
      <ul className="list-none pl-5">
        {recipe.ingredients.map((ingredient, index) => (
          <li
            key={index}
            className="before:content-['–'] before:mr-2 before:text-red-800 before:text-xl text-xl"
          >
            {ingredient}
          </li>
        ))}
      </ul>
      {recipe.id === 2 && (
        <>
          <hr
            className="border-0 bg-red-800 mt-3 mb-12"
            style={{ height: "2px" }}
          />
          <img
            src={Lurpak}
            alt={recipe.title}
            className="rounded-lg object-cover mr-4 w-full h-auto animate-bounce"
          />
        </>
      )}
      <hr className="border-0 bg-red-800 mt-3" style={{ height: "2px" }} />
      <h2 className="p-3 text-4xl italic">Instructions</h2>
      <ul className="list-none pl-5">
        {recipe.instructions.map((instruction, index) => (
          <li
            key={index}
            className="before:content-[''] before:mr-2 before:text-red-800 before:text-xl text-xl"
          >
            {index + 1}. {instruction}
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
                className="before:content-['–'] before:mr-2 before:text-red-800 before:text-xl text-xl"
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
            <div className="pb-3">
              <RecipeReview key={index} review={review} />
            </div>
          ))}
        </div>
      )}

      {recipe.warning && (
        <>
          <div className="pb-3">
            <hr
              className="border-0 bg-red-800 mt-3"
              style={{ height: "2px" }}
            />
          </div>
          <p className="pb-3 text-xs">{recipe.warning}</p>
        </>
      )}
    </div>
  );
};

export default RecipePage;
