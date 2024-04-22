import { Link } from "react-router-dom";

export function BttnRecipes() {
  return (
    <div className="mt-3">
      <Link to="recipes">
        <button type="button" className="font-semibold text-white bg-yellow-400 p-3 rounded-lg text-lg">
          List of recipes
        </button>
      </Link>
    </div>
  );
}