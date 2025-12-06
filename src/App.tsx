import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import RecipeSearchPage from "./pages/RecipeSearchPage";
import { RecipeFiles } from "./data/RecipeFiles";
import RecipePage from "./pages/RecipePage";

function App() {
  return (
    <div className="App h-screen flex flex-col">
      <BrowserRouter>
        <header className="bg-red-800 text-white sticky top-0 z-10 text-font w-screen">
          <div className="max-w-5xl mx-auto flex p-4 items-center justify-between">
            <NavLink to="/">
              <h1 className="text-3xl flex text-left">A Taste Of Worcester</h1>
            </NavLink>
            <div className="space-x-8">
              <NavLink
                to="/Recipes"
                className="hover:opacity-60 text-l text-right "
              >
                Search Recipes
              </NavLink>
            </div>
          </div>
        </header>
        <div className="flex-grow mx-16">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
              path="/Recipes"
              element={<RecipeSearchPage recipes={RecipeFiles} />}
            />
            <Route path="/Recipes/:id" element={<RecipePage />} />
          </Routes>
        </div>
        <footer className="text-font bg-red-800 flex justify-between items-center text-sm text-white w-full">
          <p className="order-2 md:order-1 mt-8 md:mt-0 mx-56 inline-flex text-white">
            &copy; Harrington-Bithell Enterprises, 2025.
          </p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
