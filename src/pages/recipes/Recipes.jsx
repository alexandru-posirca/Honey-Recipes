import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ModuleTop from "../../components/ModuleTop";
import "../recipes/recipes.css";


function Recipes() {
  const recipes = useLoaderData();
  const [recipesFiltered, setRecipesFiltered] = useState(recipes);
  const [categoryActive, setCategoryActive] = useState("All recipes");

  const categoryName = {
    "All recipes": "All recipes",
    "Eclair": "Ecler",
    "Cake": "Tort",
    "Tart": "Tartă",
    "Mini-Cake": "Mini-Prajitură",
    "Cookie": "Fursec"
  };

  const categories = Object.keys(categoryName);

  const recipesFilter = category => {
    const dataCategory = categoryName[category];
    const filtered = category === "All recipes" ? recipes : recipes.filter(recipe => recipe.category === dataCategory);
    setRecipesFiltered(filtered);
    setCategoryActive(category);
  }

  return (
    <div>
      <ModuleTop
        title={"Recipes"}
        subtitle={"Healthy food recipes with 100% natural honey"}
      />
      <div className="container mx-auto">
        <div className="flex justify-center mb-12">
          <div className="p-2 border-solid border border-gray-100 border-opacity-60 rounded-2xl flex gap-2 flex-wrap md:flex-nowrap justify-center md:justify-normal">
          {categories.map(categoryName => (
            <button
            key={categoryName}
            onClick={() => recipesFilter(categoryName)}
            className={`rounded-xl p-2`}
            style={{
            backgroundColor: categoryActive === categoryName ? "#e8b307" : "white",
            fontWeight: categoryActive === categoryName ? "600" : "400",
            color: categoryActive === categoryName ? "white" : "black"
          }}
            >
          {categoryName}
            </button>
          ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {recipesFiltered.length === 0 ? (
            <div className="text-2xl">
              <p>No recipes in this category</p>
              </div>
          ) : (
            recipesFiltered.map((recipe) => (
            <div className="recipe-item w-[45%] md:w-[31%] xl:w-[18%]" key={recipe.id}>
              <div className="card h-full">
                <Link to={recipe.id.toString()} className="rounded-lg border-solid border border-gray-100 border-opacity-60 flex flex-col">
                  <div className="h-[160px] md:h-[200px] overflow-hidden rounded-t-lg">
                    <img className="size-full object-cover" src={recipe.img} alt={recipe.title} />
                  </div>
                  <div className="p-3 flex flex-col gap-2">
                    <h3 className="overflow-hidden text-ellipsis max-w-full whitespace-nowrap">{recipe.title}</h3>
                  <p>Time:{" "}
                    <span className="font-semibold">{recipe.time}</span>
                  </p>
                  <p className="italic">Read recipes...</p>
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