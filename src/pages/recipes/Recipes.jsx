import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ModuleTop from "../../components/ModuleTop";
import "../recipes/recipes.css";


function Recipes() {
  const recipes = useLoaderData();
  const [recipesFiltered, setRecipesFiltered] = useState(recipes);

  return (
    <div>
      <ModuleTop
        title={"Recipes"}
        subtitle={"Healthy food recipes with 100% natural honey"}
      />
      <div className="container mx-auto">
        <div className="flex justify-center p-2">
          <h2>Find all recipes</h2>
        </div>
        <div>
        <div className="recipe-item border border-solid w-[300px] rounded-xl p-6">
          <div className="card h-full">
            <Link className="card-link flex gap-4 flex-col">
              <div>
                <img src="" alt="recipe-img" />
              </div>
              <p>Time prepare: </p>
              <p>Read recipes...</p>
            </Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Recipes;
