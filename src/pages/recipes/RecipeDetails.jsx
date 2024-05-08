import { Link, useLoaderData } from "react-router-dom";

export default function RecipeDetails() {
  const recipe = useLoaderData();

  return (
    <div className="container mx-auto">
      <div className="flex">
        <div>
          <div>
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
          </div>
          <div>
            <h3>Ingredients:</h3>
            <ul className="mt-3">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative">
          <img
            src={recipe.img}
            alt={recipe.title}
            className="object-cover h-full"
          />
          <div>
            <Link to="/recipes">All recipes</Link>
          </div>
          <div className="absolute top-0">
            <h3>{recipe.category}</h3>
          </div>
        </div>
      </div>
      <div>
        <h3>Preparation:</h3>
        <div>
          {recipe.preparation.map((step, index) => (
            <p key={index}>
              <span className="font-semibold">Step {index + 1}:</span> {step}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export const recipeDetailsLoader = async ({ params }) => {
  const { id } = params;
  try {
    const res = await fetch(`public/data/db.json`);
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
