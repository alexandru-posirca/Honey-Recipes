import { Link, useLoaderData } from "react-router-dom";

export default function RecipeDetails() {
  const recipe = useLoaderData();

  return (
    <div className="container mx-auto">
      <div className="p-4 border border-gray-100 border-opacity-40 mt-6 rounded-lg">
      <div className="flex flex-col-reverse md:flex-row gap-4">
        <div className="md:max-w-[370px] lg:max-w-[600px]">
          <div>
            <h2 className="text-2xl md:text-3xl">{recipe.title}</h2>
            <p className="my-4">{recipe.description}</p>
          </div>
          <div>
            <h3 className="text-xl">Ingredients:</h3>
            <ul className="ingredients mt-2 pl-5">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative w-full">
          <div className="h-[350px] md:h-[450px]">
          <img
            className="size-full object-cover h-full rounded-lg"
            src={recipe.img}
            alt={recipe.title}
          />
          </div>
          <div className="absolute top-0 m-2 p-2 rounded-lg bg-yellow-400 text-white font-semibold">
            <Link className="" to="/recipes">All recipes</Link>
          </div>
          <div className="absolute top-0 right-0 m-2 p-2 rounded-lg bg-yellow-200">
            <h3>{recipe.category}</h3>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-xl">Preparation:</h3>
        <div className="flex flex-col gap-3 mt-3">
          {recipe.preparation.map((step, index) => (
            <p key={index}>
              <span className="font-semibold text-lg">Step {index + 1}:</span> {step}
            </p>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}

export const recipeDetailsLoader = async ({ params }) => {
  const { id } = params;
  try {
    const res = await fetch(`data/db.json`);
    if (!res.ok) {
      throw new Error("Sorry, failed to load data");
    }
    const data = await res.json();
    const recipe = data[parseInt(id) - 1];
    if (!recipe) {
      throw new Error("Sorry, this recipe doesn't exist");
    }
    return recipe;
  } catch (err) {
    alert(err);
    return null;
  }
};
