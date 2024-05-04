import { useLoaderData } from "react-router-dom";

export default function RecipeDetails() {
  const recipe = useLoaderData();

  console.log(recipe);

  return (
    <div className="container">
      <div>
        <h2>{recipe.title}</h2>
        <p>{recipe.description}</p>
      </div>
    </div>
  );
}

export const recipeDetailsLoader = async ({ params }) => {
  const { id } = params;
  try {
    const res = await fetch(`data/db.json/${id}`);
    if (!res.ok) {
      throw new Error("Sorry, this recipe doesn't exist");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    alert(err);
    return null;
  }
};
