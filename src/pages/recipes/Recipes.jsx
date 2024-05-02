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
        <div className="flex flex-wrap justify-between gap-5">
          {recipesFiltered.length === 0 ? (
            <div className="text-2xl">
              <p>No recipes in this category</p>
              </div>
          ) : (
            recipesFiltered.map((recipe) => (
            <div className="recipe-item w-[18%]" key={recipe.id}>
              <div className="card h-full">
                <Link to={recipe.id.toString()} className="rounded-lg border-solid border border-gray-100 border-opacity-60 flex flex-col">
                  <div className="h-[200px] overflow-hidden rounded-lg">
                    <img className="size-full object-cover" src={recipe.img} alt={recipe.title} />
                  </div>
                  <div className="p-4">
                    <h3 className="my-2 overflow-hidden text-ellipsis max-w-full whitespace-nowrap">{recipe.title}</h3>
                  <p className="mb-2">Preparation time:{" "}
                    <span className="text-bold">{recipe.time}</span>
                  </p>
                  <p>Read recipes...</p>
                  </div>
                </Link>
              </div>
            </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Recipes;


export const recipesLoader = async () => {
  try {
    const res = await fetch("../data/db.json");
    if (!res.ok) {
      throw new Error("Error fetch data");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    alert(err.message);
  }
 };